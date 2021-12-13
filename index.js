
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
const formDesign = `
<h1>Contenedorrr</h1>
    <form action="index.html" method="post" id='form-seo'>
    <select class="type-of-site" name="typeOfSite" id="typeOfSite">
        <option value="Tipo de sitio web" disabled>Tipo de sitio web</option>
        <option value="Ecommerce">Ecommerce</option>
        <option value="Langind">Langind</option>
        <option value="Trivia">Trivia</option>
    </select>
    <p class="number-pages">Número de paginas internas</p>
    <input class="input-range" type="range" min="0" max="5" value="5" step="1">
    <div class="components">
        <p class="title-components">Selecciona uno o varios componentes internos</p>
        <label class="label-components" for="Videos">Videos</label>
        <input class="input-components" type="checkbox" name="Components" id="Videos">
        <label class="label-components" for="Videos2">Galeria de fotos</label>
        <input class="input-components" type="checkbox" name="Components" id="Videos2">
        <label class="label-components" for="Videos3">Redes sociales</label>
        <input class="input-components" type="checkbox" name="Components" id="Videos3">
        <label class="label-components" for="Videos4">Formulario de contacto</label>
        <input class="input-components" type="checkbox" name="Components" id="Videos4">
    </div>
    </form>
`
const formSeo = `
<h1>Contenedorrr SEO</h1>
`

const formAnalitycs = `
    <h1>Contenedorrr Analitycs</h1>
`

const formPuzzleDigital = `
    <h1>Contenedorrr Puzzle Digital</h1>
`

function showProduct (product) {
    console.log('entrooo');
    switch (product) {
        case 1:
            document.getElementById("container-forms").innerHTML = formDesign;
            break;
        case 2:
            document.getElementById("container-forms").innerHTML = formSeo;
            break;
        case 3:
            document.getElementById("container-forms").innerHTML = formDesign;
            break;
        case 4:
            document.getElementById("container-forms").innerHTML = formAnalitycs;
            break;
        default:
            break;
    }
}
