
let menuMobile = false;
function openMenuMobile(state){
    if(state){
        document.getElementsByClassName("menu-mobile")[0].style.display = "flex";
        menuMobile = true;
    }else{
        document.getElementsByClassName("menu-mobile")[0].style.display = "none";
        menuMobile = false;
    }
}

openMenuMobile(false);