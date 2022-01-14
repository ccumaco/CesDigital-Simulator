
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

function enviar_formulario(){
    document.formulario1.submit()
 }

openMenuMobile(false);
const formDesign = `
        <select onChange="getTypeOfSite()" class="type-of-site" name="typeOfSite" id="typeOfSite">
            <option value="Tipo de sitio web" disabled>Tipo de sitio web</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Langind">Langind</option>
            <option value="Trivia">Trivia</option>
            <option value="Trivia">Otros</option>
        </select>
        <p class="number-pages">Número de paginas internas</p>
            <input onchange="getInternalPages()" id="internal-pages" type="range" class="input-range" min="1" value="1" max="6" step="1" list="ticks">
        <div class="components">
            <p class="title-components">Selecciona uno o varios componentes internos</p>
            <input class="input-components" onChange="getInterComponent()" type="checkbox" name="Components" id="Videos">
            <label class="label-components" for="Videos">Videos</label>
            <input class="input-components" onChange="getInterComponent()" type="checkbox" name="Components" id="galetyPhotos">
            <label class="label-components" for="galetyPhotos">Galeria de fotos</label>
            <input class="input-components" onChange="getInterComponent()" type="checkbox" name="Components" id="socialNetwork">
            <label class="label-components" for="socialNetwork">Redes sociales</label>
            <input class="input-components" onChange="getInterComponent()" type="checkbox" name="Components" id="contactForm">
            <label class="label-components" for="contactForm">Formulario de contacto</label>
        </div>
`
const formSeo = `
<div class="container-steps-seo">
    <div class="step">
        <p class="title-step">Paso 1</p>
        <p class="paragraph-step">El primer mes se hace un diagnóstico del sitio y se realizan las mejoras</p>
    </div>
    <div class="step">
        <p class="title-step">Paso 2</p>
        <p class="paragraph-step">los siguientes meses se hacen revisiones una vez por semana, ajustes y mejoras.</p>
    </div>
    <div class="step">
        <p class="title-step">Paso 3</p>
        <p class="paragraph-step">Se entrega un tablero en datastudio con el avance logrado en el tiempo contratado.</p>
    </div>
    <div class="step">
        <p class="title-step">Paso 4</p>
        <p class="paragraph-step">Minimo 6 meses de contrato</p>
        <input onChange="getMounthsContract()" type="range" id="mounthContract" class="ticks" min="6" value="6" max="12" step="1" list="ticks">
        <datalist id="ticks" >
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
        </datalist>
    </div>
</div>
`

const formAnalitycs = `
<div class="container-steps-analitycs">
    <p class="option-analitycs">Implementación de Google Tag manager 
    <span class="tooltip">
        <i class="fas fa-question-circle question">
        <span class="text-tooltip">texto tooltip</span>
        </i>
    </span>
    </p>
    <label class="switch">
        <input type="checkbox" checked>
        <span class="slider round"></span>
    </label>
    <p class="option-analitycs">Implementación de Google Analytics 
    <span class="tooltip">
        <i class="fas fa-question-circle question">
        <span class="text-tooltip">texto tooltip</span>
        </i>
    </span>
    </p>
    <label class="switch">
        <input type="checkbox" checked>
        <span class="slider round"></span>
    </label>
    <p class="option-analitycs">Implementación de eventos, objetivos u otras personalizaciones 
    <span class="tooltip">
        <i class="fas fa-question-circle question">
        <span class="text-tooltip">texto tooltip</span>
        </i>
    </span>
    </p>
    <label class="switch">
        <input type="checkbox" checked>
        <span class="slider round"></span>
    </label>
    <p class="option-analitycs">Tablero en Data Studio con reporte 
    <span class="tooltip">
        <i class="fas fa-question-circle question">
        <span class="text-tooltip">texto tooltip</span>
        </i>
    </span>
    </p>
    <label class="switch">
        <input type="checkbox" checked>
        <span class="slider round"></span>
    </label>
</div>
`

const formPuzzleDigital = `
    <h1>Contenedorrr Puzzle Digital</h1>
`

function showProduct(product) {
    switch (product) {
        case 1:
            document.getElementById("container-forms").innerHTML = formDesign;
            break;
        case 2:
            document.getElementById("container-forms").innerHTML = formSeo;
            break;
        case 3:
            document.getElementById("container-forms").innerHTML = formAnalitycs;
            break;
        case 4:
            document.getElementById("container-forms").innerHTML = formPuzzleDigital;
            break;
        default:
            break;
    }
}
if (window.location.pathname == '/index.html' || '') {
    showProduct(1)
}


function validateFormContactUs(){
    let nameInput = document.getElementById('name').value
    if (nameInput != null || '' && nameInput.lenght >= 5) {
        
    }
}