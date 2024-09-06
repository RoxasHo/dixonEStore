function validateForm() {
    validateFullName();
    validateEmail();
    validatePhoneNum();
    validateCardName();
    validateCardNumber();
    validateCVV();
}

function validateFullName() {
    var regfname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var fname = payment.fname.value;
    if(regfname.test(fname)) {
        return true; }
    else {
        alert("Please Enter A Valid Full Name!");
        return false; }
}

function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(payment.email.value)) {
        return true; }
    else {
        alert("Please Enter A Valid Email Address!")
        return false; }
}

function validatePhoneNum() {
    var regpnum = /^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/;
    var pnum = payment.pnum.value;
    if(regpnum.test(pnum)) {
        return true; }
    else {
        alert("Please Enter A Valid Phone Number!");
        return false; }
}

function validateCardName() {
    var regcname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var cname = payment.cname.value;
    if(regcname.test(cname)) {
        return true; }
    else {
        alert("Please Enter A Valid Cardholder's Name!");
        return false; }
}

function validateCardNumber() {
    var regcnum = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
    var cnum = payment.cnum.value;
    if (regcnum.test(cnum)) {
        return true; }
    else {
        alert("Please Enter A Valid Card Number!");
        return false; }
}

function validateCVV() {
    var regCVV = /^[0-9]{3}$/;
    var cvv = payment.cvv.value;
    if (regCVV.test(cvv)) {
        return true; }
    else {
        alert ("Please Enter A Valid CVV!")
        return false; }
}