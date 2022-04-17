
let menuMobile = false;
function openMenuMobile(state) {
    if (state) {
        document.getElementsByClassName("menu-mobile")[0].style.display = "flex";
        menuMobile = true;
    } else {
        document.getElementsByClassName("menu-mobile")[0].style.display = "none";
        menuMobile = false;
    }
}

 function changeQuoteHtml(service){
    console.log('inter quote service', service);
}

let modalFormIndex = false;
function modalFormContacUs(){
    modalFormIndex = !modalFormIndex;
    if (validateNumber() && validateName() && validateEmail()) {       
        document.querySelector('#form-contact-us').submit()
    }
}

openMenuMobile(false);

function validateNumber(){
    if (document.getElementById('subject').value.length > 2 && document.getElementById('subject').value.length < 30) {
        return true
    }
    return false
}
function validateName(){
    if (document.getElementById('name').value.length > 2 && document.getElementById('name').value.length < 30) {
        return true
    }
    return false
}

function validateEmail(){
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (emailRegex.test(document.getElementById('mail').value)){
        return true
    }
    return false
}

function confirmSendForm () {
    if (validateName() && validateNumber() && validateEmail()) {
        document.querySelector('.thanks-modal').style.display = 'block'
        document.querySelector('.container-hidden').style.display = 'none'
    }
}

