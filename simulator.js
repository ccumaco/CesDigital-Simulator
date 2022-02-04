
let objectCotization = {
    components: [],
    internalPages: 1,
    typeOfSite: 'ecommerce',
}

function clearObject (service) {
    switch (service) {
        case 1:
            objectCotization = {
                components: [],
                typeOfSite: 'ecommerce',
                internalPages: 1
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

let costTagManager = 100000


function showProduct(product) {
    switch (product) {
        case 1:
            document.querySelector("#container-forms").innerHTML = formDesign;
            document.querySelector("#quote-html").innerHTML = quoteFormDesign;
            clearObject(1)
            break;
        case 2:
            document.querySelector("#container-forms").innerHTML = formSeo;
            document.querySelector("#quote-html").innerHTML = quoteFormSeo;
            clearObject(2)
            break;
        case 3:
            document.querySelector("#container-forms").innerHTML = formAnalytics;
            document.querySelector("#quote-html").innerHTML = quoteAnalytics;
            clearObject(3)
            break;
        case 4:
            document.querySelector("#container-forms").innerHTML = formPuzzleDigital;
            document.querySelector("#quote-html").innerHTML = quoteAnalytics;
            clearObject(4)
            break;
        default:
            break;
    }
}

function getAnalytics(service){
    switch (service) {
        case 'tag-manager':
            objectCotization.gtm = !objectCotization.gtm
            if (objectCotization.gtm) {
                document.querySelector('#list-gtm').style.display = 'block'
            } else {
                document.querySelector('#list-gtm').style.display = 'none'
            }
            break;
        case 'analytics':
            objectCotization.analytics = !objectCotization.analytics
            if (objectCotization.analytics) {
                document.querySelector('#list-analitycs').style.display = 'block'
            } else {
                document.querySelector('#list-analitycs').style.display = 'none'
            }
            break;
        case 'events-topics':
            objectCotization.events = !objectCotization.events
            if (objectCotization.events) {
                document.querySelector('#list-events').style.display = 'block'
            } else {
                document.querySelector('#list-events').style.display = 'none'
            }
            break;
        case 'data-studio':
            objectCotization.dataStudio = !objectCotization.dataStudio
            if (objectCotization.dataStudio) {
                document.querySelector('#list-reports').style.display = 'block'
            } else {
                document.querySelector('#list-reports').style.display = 'none'
            }
            break;
        default:
            break;
    }
    console.log('objectCotization', objectCotization);
}

function formatNumber (n) {
	n = String(n).replace(/\D/g, "");
  return n === '' ? n : Number(n).toLocaleString();
}
function getMounthsContract(){
    let costSeoMount = 800000
    let oneMountMore = 100000
    if (document.querySelector('#mounthContract').value > 6) {
        costSeoMount = costSeoMount + ((document.querySelector('#mounthContract').value - 6) * oneMountMore)
    }
    textPriceSeo.notify(`${formatNumber(costSeoMount)} + IVA`)
    objectCotization.mountsContract = document.querySelector('#mounthContract').value
    textListSeo.notify(`${document.querySelector('#mounthContract').value} Meses de posicionamiento SEO`)
    console.log('objectCotization', objectCotization);
}

function getInterComponent(){
    for (let i = 0; i < document.querySelectorAll('.input-components').length; i++) {
        const element = document.querySelectorAll('.input-components')[i];
        if (element.checked && !objectCotization.components.includes(element.id)) {
            objectCotization.components.push(element.id)
        } else if (!element.checked && objectCotization.components.includes(element.id)) {
            objectCotization.components.splice(objectCotization.components.indexOf(element.id), 1)
        }
    }
    console.log('objectCotization', objectCotization);
}

function getInternalPages(){
    objectCotization.internalPages = document.querySelector('#internal-pages').value
    console.log('objectCotization', objectCotization);
}
function getTypeOfSite(){
    objectCotization.typeOfSite = document.querySelector('#typeOfSite').value
    console.log('objectCotization', objectCotization);
}


let modalToPay = false
function openModalToPay(){
    modalToPay = !modalToPay
    document.querySelector('#object-profile').value = JSON.stringify(objectCotization)
    if (!modalToPay) {
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
        <input onchange="getMounthsContract()" id="mounthContract" type="range" class="input-range" min="6" value="6" max="12" step="1" list="ticks">
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
const formAnalytics = `
<div class="container-steps-analitycs">
    <p class="option-analitycs">Implementación de Google Tag manager 
    <span class="tooltip">
        <i class="fas fa-question-circle question">
        <span class="text-tooltip">texto tooltip</span>
        </i>
    </span>
    </p>
    <label class="switch">
        <input type="checkbox" onChange="getAnalytics('tag-manager')" id="tag-manager" checked>
        <span class="slider round"></span>
    </label>
    <p class="option-analitycs">Implementación de Google analytics 
    <span class="tooltip">
        <i class="fas fa-question-circle question">
        <span class="text-tooltip">texto tooltip</span>
        </i>
    </span>
    </p>
    <label class="switch">
        <input type="checkbox" onChange="getAnalytics('analytics')" id="analytics" checked>
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
        <input type="checkbox" onChange="getAnalytics('events-topics')" id="events-topics" checked>
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
        <input type="checkbox" onChange="getAnalytics('data-studio')" id="data-studio" checked>
        <span class="slider round"></span>
    </label>
</div>
`
const formPuzzleDigital = `
    <h1>Contenedorrr Puzzle Digital</h1>
`

let quoteFormDesign = `
    <ul class='list'>
        <li class="type-options">- Diseño de sitio web</li>
        <li class="type-options">- Sitio informativo con páginas internas</li>
        <li class="type-options">- 3 páginas internas</li>
        <li class="type-options">- Galería de fotos</li>
        <li class="type-options">- Formulario de contácto</li>
    </ul>
    <hr>
    <p class='text-option'>Valor mínimo aproximado</p>
    <p class='price' id="minimal-price">$2.000.000</p>
    <p class='text-option'>
        Otros valores a tener en cuenta
    </p>
    <div class="value">
        <div class="contain-option">
            <p class='name'>hosting</p>
            <p class='price'>$150.000</p>
        </div>
        <div class="contain-option">
            <p class='name'>Dominio</p>
            <p class='price'>$80.000</p>
        </div>
    </div>
    <p class='text-option'>valor mínimo aproximado</p>
    <p class='price'>
        $2.230.000 + IVA
    </p>
    <div class="continer-submit">
        <button class='want' onclick="openModalToPay()">¡Lo quiero! <b> > </b> </button>
    </div>
`

let quoteFormSeo = `
    <ul class='list'>
        <li class="type-options" id="mounts-seo">-6 Meses de posicionamiento SEO</li>
    </ul>
    <hr />
    <p class='text-option' id="value-from-mounth">Total</p>
    <p class='price' id="price-seo"><b>$800.000 + iva </b></p>
    <div class="continer-submit">
        <button class='want' onclick="openModalToPay()">¡Lo quiero! <b> > </b> </button>
    </div>
    `

const quoteAnalytics = `
    <ul class='list'>
        <li class="type-options" id="list-gtm">- Google Tag Manager</li>
        <li class="type-options" id="list-analitycs">- Google analytics</li>
        <li class="type-options" id="list-events">- Eventos en analytics</li>
        <li class="type-options" id="list-reports">- Reporte en Data Studio</li>
    </ul>
    <hr />
    <p class='text-option'><b>Total</b></p>
    <p class='price'><b>$2.000.000 + iva </b></p>
    <div class="continer-submit">
        <button class='want' onclick="openModalToPay()">¡Lo quiero! <b> > </b> </button>
    </div>
`


class Subject {
    constructor () {
        this.observers = []
    }

    subscribe (observer) {
        this.observers.push(observer)
    }

    unsbscribe (observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notify (model) {
        this.observers.forEach(observer => observer.notify(model))
    }
}


class TextObject extends Subject {
    constructor(){
        super()
        this.text = ''
    }

    notify (text) {
        this.text = text
        super.notify(this)
        console.log(this, 'esto es this');
    }
}

class ListSeo {
    notify(subject){
        document.querySelector('#mounts-seo').innerHTML = subject.text
    }
}
class PriceSeo {
    notify(subject){
        document.querySelector('#price-seo').innerHTML = subject.text
    }
}

var textPriceSeo = new TextObject()
var textListSeo = new TextObject()
let listSeo  = new ListSeo()
let priceSeo  = new PriceSeo()
textListSeo.subscribe(listSeo)
textPriceSeo.subscribe(priceSeo)


showProduct(1)

console.log('objectCotization', objectCotization);