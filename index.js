
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

openMenuMobile(false);




function validateFormContactUs(){
    let nameInput = document.getElementById('name').value
    if (nameInput != null || '' && nameInput.lenght >= 5) {
        
    }
}