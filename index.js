
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
    if (modalFormIndex) {
        document.querySelector('.modal-to-pay').style.display = "flex";
    } else {
        document.querySelector('.modal-to-pay').style.display = "none";
    }
    document.querySelector('.modal-to-pay').innerHTML = `
    <div class="content-modal">
        <span class="close-modal-to-pay" onclick="modalFormContacUs()">&times;</span>
        <img class="image-checked" src="./images/checked.png" />
        <h2 class="title-modal">Por último, déjanos tus datos para poder contactarnos contigo</h2>
    </div>
    `
    setTimeout(() => {
        document.querySelector('#form-contact-us').submit()
    }, 3000);
}

openMenuMobile(false);




function validateFormContactUs(){
    let nameInput = document.getElementById('name').value
    if (nameInput != null || '' && nameInput.lenght >= 5) {
        
    }
}