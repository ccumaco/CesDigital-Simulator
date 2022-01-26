
let inputInternalPages = document.querySelector('#internal-pages')
let typeOfSite = document.querySelector('#typeOfSite')
let interComponents = document.querySelectorAll('.input-components')

let objectCotization = {
    components: [],
    internalPages: inputInternalPages.value,
    typeOfSite: typeOfSite.value,
}


function request()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200) 
        {
            var response = xhttp.responseText;
            console.log(response);
        }
    };
    xhttp.open("POST", "quote.php", true);
    xhttp.send(objectCotization);
    request(JSON.stringify(objectCotization));
}

function clearObject (service) {
    switch (service) {
        case 1:
            objectCotization = {
                components: [],
                typeOfSite: typeOfSite.value,
                internalPages: inputInternalPages.value
            }
            break;
        case 2:
            objectCotization = {
                mountsContract: 6,
            }
            break;
        case 3:
            objectCotization = {
                gtm: true,
                analytics: true,
                events: true,
                dataStudio: true
            }
            break;
    
        default:
            break;
    }

    console.log('objectCotization', objectCotization);
}

function getAnalitycs(service){
    switch (service) {
        case 'tag-manager':
            objectCotization.gtm = !objectCotization.gtm
            break;
        case 'analytics':
            objectCotization.analytics = !objectCotization.analytics
            break;
        case 'events-topics':
            objectCotization.events = !objectCotization.events
            break;
        case 'data-studio':
            objectCotization.dataStudio = !objectCotization.dataStudio
            break;
        default:
            break;
    }
    console.log(objectCotization, 'objectCotization');
}

function getMounthsContract(){
    objectCotization.mountsContract = document.querySelector('#mounthContract').value
    console.log(objectCotization, 'objectCotization');
}


function getInternalPages(){
    objectCotization.internalPages = inputInternalPages.value
    console.log(objectCotization, 'objectCotization');
}
function getTypeOfSite(){
    objectCotization.typeOfSite = typeOfSite.value
    console.log(objectCotization, 'objectCotization');
}


let modalToPay = true
function openModalToPay(){
    console.log(modalToPay);
    modalToPay = !modalToPay
    if (modalToPay) {
        document.querySelector('.modal-to-pay').style.display = 'none'
    } else{
        document.querySelector('.modal-to-pay').style.display = 'flex'
    }
}

for (let i = 0; i < document.querySelectorAll(".input-style").length; i++) {
    const element = document.querySelectorAll(".input-style")[i];
    if (element.checked) {
        objectCotization.services = element.id
    }
}

const formDesign = `
        <p><strong>Tipo de producto</strong></p>
        <select onChange="getTypeOfSite()" class="type-of-site" name="typeOfSite" id="typeOfSite">
            <option value="Tipo de sitio web" disabled>Tipo de sitio web</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Langind">Langind</option>
            <option value="Trivia">Trivia</option>
            <option value="Trivia">Otros</option>
        </select>
        <p class="number-pages">Número de paginas internas</p>
        <input onchange="getInternalPages()" id="internal-pages" type="range" class="input-range" min="1" value="1" max="6" step="1" list="ticks">
        <datalist id="ticks" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
        </datalist>
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
        <input onchange="getInternalPages()" id="internal-pages" type="range" class="input-range" min="1" value="1" max="6" step="1" list="ticks">
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
        <input type="checkbox" onChange="getAnalitycs('tag-manager')" id="tag-manager" checked>
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
        <input type="checkbox" onChange="getAnalitycs('analitycs')" id="analitycs" checked>
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
        <input type="checkbox" onChange="getAnalitycs('events-topics')" id="events-topics" checked>
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
        <input type="checkbox" onChange="getAnalitycs('data-studio')" id="data-studio" checked>
        <span class="slider round"></span>
    </label>
</div>
`
const formPuzzleDigital = `
    <h1>Contenedorrr Puzzle Digital</h1>
`
const quoteAnalitycs = `
    <ul class='list'>
        <li class="type-options">- Google Tag Manager</li>
        <li class="type-options">- Google Analytics</li>
        <li class="type-options">- Eventos en Analytics</li>
        <li class="type-options">- Reporte en Data Studio</li>
    </ul>
    <hr />
    <p class='text-option'><b>Total</b></p>
    <p class='price'><b>$2.000.000 + iva </b></p>
`
let costTagManager = 100000


function showProduct(product) {
    switch (product) {
        case 1:
            document.querySelector("#container-forms").innerHTML = formDesign;
            document.querySelector("#quote-html").innerHTML = 'quoteAnalitycs';
            break;
        case 2:
            document.querySelector("#container-forms").innerHTML = formSeo;
            document.querySelector("#quote-html").innerHTML = `formSeo`;
            break;
        case 3:
            document.querySelector("#container-forms").innerHTML = formAnalitycs;
            document.querySelector("#quote-html").innerHTML = quoteAnalitycs;
            break;
        case 4:
            document.querySelector("#container-forms").innerHTML = formPuzzleDigital;
            document.querySelector("#quote-html").innerHTML = `formPuzzleDigital`;
            break;
        default:
            break;
    }
}


function getInterComponent(){
    for (let i = 0; i < interComponents.length; i++) {
        const element = interComponents[i];
        if (element.checked && !objectCotization.components.includes(element.id)) {
            objectCotization.components.push(element.id)
        } else if (!element.checked && objectCotization.components.includes(element.id)) {
            objectCotization.components.splice(objectCotization.components.indexOf(element.id), 1)
        }
    }
    console.log(objectCotization, 'objectCotization');
}

console.log(objectCotization);