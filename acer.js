let carts=document.querySelectorAll('.add-cart');
let product =[{
    name:' Acer Predator Helios 500  ',
    price:10150,
    tag:'acer/laptops/acer 1'  ,
    inCart:0
},
{
    name:'Acer Nitro 5 AN515',
    price:4288,
    tag:'acer/laptops/acer 2',
    inCart:0
},
{
    name:'Acer Aspire 5 A51',
    price:3099,
    tag:'acer/laptops/acer 3',
    inCart:0
},
{
    name:'Acer Aspire 3 A315',
    price:2199,
    tag:'acer/laptops/acer 4',
    inCart:0
}
]

for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',()=>{
       cartNumbers(product[i]);
       totalCost(product[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers ;
    }
} 

function cartNumbers(product){
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
   if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers+ 1);
    document.querySelector('.cart span').textContent=productNumbers + 1;}
    else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
      
    }setItems(product);
}
  
function setItems(product){
        let cartItems = localStorage.getItem
        ("productsInCart");
        cartItems= JSON.parse(cartItems);

        if(cartItems!=null){
            if(cartItems[product.tag]==undefined){
                cartItems = {
                    ...cartItems,
                    [product.tag]:product
                }
            }
            cartItems[product.tag].inCart +=1;
        }else{
            product.inCart =1;
            cartItems={
                [product.tag]:product
            }
    }
        localStorage.setItem("productsInCart",JSON.stringify( cartItems));
    }
    function totalCost(product){
       // console.log("The product price is",product.price);
       let cartCost=localStorage.getItem('totalCost');

       console.log("My cartCost is",cartCost);
   
    if(cartCost != null){
        cartCost=parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    } else{
        localStorage.setItem("totalCost",product.price);}
    }
    function displayCart(){
        let cartItems=localStorage.getItem("productsInCart");
        cartItems= JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        let cartCost=localStorage.getItem('totalCost');

      
        if(cartItems && productContainer){
            productContainer.innerHTML= '';
            Object.values(cartItems).map(item=> {
                productContainer.innerHTML += `
               <div class="productt">
                <div class="products">
                <ion-icon name="close-circle"></ion-icon>
                <img src="images/${item.tag}.png" height=60px width=90px >
                <span>${item.name} </span>
            </div>
            <div class="price">RM${item.price}</div>
            <div class="quantity">
                <ion-icon onclick="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
            RM${item.inCart * item.price},00
            </div>
            </div>
            </div>`
            
   
            });

            productContainer.innerHTML +=`
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    RM${cartCost},00
                </h4>
              `;

        }
       
    }


    
onLoadCartNumbers();
displayCart();

