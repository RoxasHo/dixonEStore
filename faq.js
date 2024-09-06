const faqs = document.querySelectorAll(".faqbody");

faqs.forEach((faqbody) => {
    faqbody.addEventListener("click", () => {
        faqbody.classList.toggle("active");
    }); 
});
