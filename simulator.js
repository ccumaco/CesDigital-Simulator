


let objectCotization = {
    components: [],
    internalPages: 1,
    typeOfSite: 'ecommerce',
    totalPrice: 0
}
let regex = /(\d+)/g;
function clearObject (service) {
    switch (service) {
        case 1:
            objectCotization = {
                components: [],
                typeOfSite: 'ecommerce',
                internalPages: 1,
                price: formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )
            }
            break;
        case 2:
            objectCotization = {
                mountsContract: 6,
                price: formatNumber(800000)
            }
            break;
        case 3:
            objectCotization = {
                gtm: true,
                analytics: true,
                events: true,
                dataStudio: true,
                price: totalPriceWeb
            }
            break;
    
        default:
            break;
    }

    
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
                totalPriceWeb += priceGtm
                textListGtml.notify(`- Google Tag Manager`)
            } else {
                totalPriceWeb -= priceGtm
                textListGtml.notify(``)
            }
            break;
        case 'analytics':
            objectCotization.analytics = !objectCotization.analytics
            if (objectCotization.analytics) {
                totalPriceWeb += priceAnalitycs
                textListAnalitycs.notify(`- Google analytics`)
            } else {
                totalPriceWeb -= priceAnalitycs
                textListAnalitycs.notify(``)
            }
            break;
        case 'events-topics':
            objectCotization.events = !objectCotization.events
            if (objectCotization.events) {
                totalPriceWeb += priceEvents
                textListEvents.notify(`- Eventos en analytics`)
            } else {
                totalPriceWeb -= priceEvents
                textListEvents.notify(``)
            }
            break;
        case 'data-studio':
            objectCotization.dataStudio = !objectCotization.dataStudio
            if (objectCotization.dataStudio) {
                totalPriceWeb += priceDataStudio
                textListDataEstudio.notify(`- Reporte en Data Studio`)
            } else {
                totalPriceWeb -= priceDataStudio
                textListDataEstudio.notify(``)
            }
            break;
        }
        objectCotization.price = totalPriceWeb
    
}

function formatNumber (n) {
	n = String(n).replace(/\D/g, "");
  return n === '' ? n : Number(n).toLocaleString();
}

let totalMountContract = 0
function getMounthsContract(){
    let costSeoMount = 1800000
    let oneMountMore = 150000
    if (document.querySelector('#mounthContract').value > 6) {
        costSeoMount = costSeoMount + ((document.querySelector('#mounthContract').value - 6) * oneMountMore)
    }
    textPriceSeo.notify(`${formatNumber(costSeoMount)} + IVA`)
    objectCotization.mountsContract = document.querySelector('#mounthContract').value
    textListSeo.notify(`${document.querySelector('#mounthContract').value} Meses de posicionamiento SEO`)
    objectCotization.price = formatNumber(costSeoMount)
    totalMountContract = formatNumber(costSeoMount)
}

function getInterComponent(){
    for (let i = 0; i < document.querySelectorAll('.input-components').length; i++) {
        const element = document.querySelectorAll('.input-components')[i];
        if (element.checked && !objectCotization.components.includes(element.id)) {
            if (element.id == 'galetyPhotos') {
                textPriceInternalPages.subscribe(listGalery)
                totalPriceDesignWeb += priceGalery
            } else if(element.id == 'socialNetwork'){
                textPriceInternalPages.subscribe(listSocial)
                totalPriceDesignWeb += priceSocialNetwork
            } else if (element.id == 'contactForm'){
                textPriceInternalPages.subscribe(listFormContact)
                totalPriceDesignWeb += priceFormContact
            } else if (element.id == 'Videos'){
                textPriceInternalPages.subscribe(listVideos)
                totalPriceDesignWeb += priceVideos
            }
            textPriceInternalPages.notify(`$${formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )} + IVA`)
            objectCotization.components.push(element.id)
        } else if (!element.checked && objectCotization.components.includes(element.id)) {
            objectCotization.components.splice(objectCotization.components.indexOf(element.id), 1)
            if (element.id == 'galetyPhotos') {
                textPriceInternalPages.subscribe(deleteListGalery)
                totalPriceDesignWeb -= priceGalery
            } else if(element.id == 'socialNetwork'){
                textPriceInternalPages.subscribe(deleteListSocial)
                totalPriceDesignWeb -= priceSocialNetwork
            } else if (element.id == 'contactForm'){
                textPriceInternalPages.subscribe(deleteListFormContact)
                totalPriceDesignWeb -= priceFormContact
            } else if (element.id == 'Videos'){
                textPriceInternalPages.subscribe(deleteListVideos)
                totalPriceDesignWeb -= priceVideos
            }
            textPriceInternalPages.notify(`$${formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )} + IVA`)
        }
        objectCotization.price = formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )
    }
    
}

function disableInterComponents(){
    for (let i = 0; i < document.querySelectorAll('.input-components').length; i++) {
        const element = document.querySelectorAll('.input-components')[i];
        if (element.checked) {
            element.click()
        }
    }
}

let beforePrice = 0
function getInternalPages(){
    objectCotization.internalPages = document.querySelector('#internal-pages').value
    totalPriceDesignWeb -= beforePrice 
    beforePrice = (oneMorePage * objectCotization.internalPages)
    totalPriceDesignWeb += beforePrice
    textPriceInternalPages.notify(`$${formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )} + IVA`)
    objectCotization.price = formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )
}
function getTypeOfSite(){
    objectCotization.typeOfSite = document.querySelector('#typeOfSite').value
    disableInterComponents()
    initialPriceService(document.querySelector('#typeOfSite').value)
    if (document.querySelector('#typeOfSite').value == 'Landing') {
        document.querySelector('#list-internal-pages').setAttribute('style', 'display: none')
        document.querySelector('#internal-pages').setAttribute('style', 'display: none')
        document.getElementsByClassName('number-pages')[1].setAttribute('style', 'display: none')
        totalPriceDesignWeb -= (document.querySelector('#internal-pages').value * oneMorePage)
        textPriceInternalPages.notify(`$${formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )} + IVA`)
    } else {
        document.querySelector('#list-internal-pages').removeAttribute('style')
        totalPriceDesignWeb += (document.querySelector('#internal-pages').value * oneMorePage)
        textPriceInternalPages.notify(`$${formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )} + IVA`)
        document.querySelector('#internal-pages').setAttribute('style', 'display: block')
        document.getElementsByClassName('number-pages')[1].setAttribute('style', 'display: block')
    }
    objectCotization.price = formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )
}

function initialPriceService(service){
    switch (service) {
        case 'Landing':
            totalPriceDesignWeb = basePriceLangingPage + oneMorePage
            textMinimalPrice.notify(formatNumber(basePriceLangingPage + oneMorePage))
            break;
        case 'InformativeSite':
            totalPriceDesignWeb = basePriceInformativeSite + oneMorePage
            textMinimalPrice.notify(formatNumber(basePriceLangingPage + oneMorePage))
            break;
        case 'InformativeSitePayment':
            totalPriceDesignWeb = basePricePagePayment + oneMorePage
            textMinimalPrice.notify(formatNumber(basePricePagePayment + oneMorePage))
            break;
        case 'Ecommerce':
            totalPriceDesignWeb = basePriceEcommerce + oneMorePage
            textMinimalPrice.notify(formatNumber(basePriceEcommerce + oneMorePage))
            break;
    }
    objectCotization.price = formatNumber(totalPriceDesignWeb + priceHosting + priceDomain )
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
        <p class="number-pages"><strong>Tipo de producto</strong></p>
        <select onChange="getTypeOfSite()" class="type-of-site" name="typeOfSite" id="typeOfSite">
            <option value="Tipo de sitio web" disabled>Tipo de sitio web</option>
            <option value="InformativeSite">Sitio informativo con páginas internas</option>
            <option value="Landing">Landing page (Página de aterrizaje)</option>
            <option value="InformativeSitePayment">Sitio informativo con pasarela de pagos</option>
            <option value="Ecommerce">Ecommerce</option>
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
            <label class="label-components"  for="Videos">Videos</label>
            <input class="input-components" onChange="getInterComponent()" type="checkbox" name="Components" id="galetyPhotos">
            <label class="label-components"  for="galetyPhotos">Galeria de fotos</label>
            <input class="input-components" onChange="getInterComponent()" type="checkbox" name="Components" id="socialNetwork">
            <label class="label-components"  for="socialNetwork">Redes sociales</label>
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
        <li class="type-options" id="list-internal-pages">- 1 página interna</li>
        <li class="type-options" id="list-galery"></li>
        <li class="type-options" id="list-form"></li>
        <li class="type-options" id="list-social-network"></li>
        <li class="type-options" id="list-videos"></li>
    </ul>
    <hr>
    <p class='text-option'>Valor mínimo aproximado</p>
    <p class='price' id="minimal-price">$950.000</p>
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
    <p class='text-option'>Valor total aproximado</p>
    <p class='price' id="price-design-web">
        $1.180.000 + IVA
    </p>
    <div class="continer-submit">
        <button class='want' onclick="openModalToPay()">¡Lo quiero! <b> > </b> </button>
    </div>
`

let quoteFormSeo = `
    <ul class='list'>
        <li class="type-options">- Posicionamiento SEO</li>
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
        <li class="type-options">- Analitica Web</li>
        <li class="type-options" id="list-gtm">- Google Tag Manager</li>
        <li class="type-options" id="list-analitycs">- Google analytics</li>
        <li class="type-options" id="list-events">- Eventos en analytics</li>
        <li class="type-options" id="list-reports">- Reporte en Data Studio</li>
    </ul>
    <hr />
    <p class='text-option'><b>Total</b></p>
    <p class='price'><b id="price-analitycs">$1'250.000 + iva </b></p>
    <div class="continer-submit">
        <button class='want' onclick="openModalToPay()">¡Lo quiero! <b> > </b> </button>
    </div>
`


class Subject {
    constructor () {
        this.observers = []
    }

    subscribe (observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer)
        } else {
            this.observers.splice(this.observers.indexOf(observer), 1)
            this.observers.push(observer)
        }
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
    }
}

class ListGtm {
    notify(subject){
        document.querySelector('#list-gtm').innerHTML = subject.text
    }
}
class ListEvent {
    notify(subject){
        document.querySelector('#list-events').innerHTML = subject.text
    }
}
class ListDataEstudio {
    notify(subject){
        document.querySelector('#list-reports').innerHTML = subject.text
    }
}
class ListAnalitycs {
    notify(subject){
        document.querySelector('#list-analitycs').innerHTML = subject.text
    }
}
class ListSeo {
    notify(subject){
        document.querySelector('#mounts-seo').innerHTML = subject.text
    }
}
class PriceInternalPage {
    notify(subject){
        document.querySelector('#price-design-web').innerHTML = subject.text
    }
}
class MinimalPrice {
    notify(subject){
        let numberComplete = ''
        for (let number = 0; number < subject.text.match(regex).length; number++) {
            const element = subject.text.match(regex)[number];
            numberComplete += element
        }
        document.querySelector('#minimal-price').innerHTML =  `$${formatNumber(Number(numberComplete - priceHosting - priceDomain))}`
       
    }
}
class TextListInternalPages {
    notify(){
        
        if (document.querySelector('#internal-pages').value > 1) {
            document.querySelector('#list-internal-pages').innerHTML = `- ${document.querySelector('#internal-pages').value} páginas internas`
        } else {
            document.querySelector('#list-internal-pages').innerHTML = `- ${document.querySelector('#internal-pages').value} página interna`
        }
    }
}
class TextListGalery {
    notify(){
        document.querySelector('#list-galery').innerHTML = `- Galería de fotos`
    }
}
class DeleteTextListGalery {
    notify(){
        document.querySelector('#list-galery').innerHTML = ``
    }
}
class TextListFormContact {
    notify(){
        document.querySelector('#list-form').innerHTML = `- Formulario de contácto`
    }
}
class DeleteTextListFormContact {
    notify(){
        document.querySelector('#list-form').innerHTML = ``
    }
}
class TextListVideos {
    notify(){
        document.querySelector('#list-videos').innerHTML = `- Videos`
    }
}
class DeleteTextListVideos {
    notify(){
        document.querySelector('#list-videos').innerHTML = ``
    }
}
class TextListSocial {
    notify(){
    document.querySelector('#list-social-network').innerHTML = `- Redes Sociales`
    }
}
class DeleteTextListSocial {
    notify(){
    document.querySelector('#list-social-network').innerHTML = ``
    }
}
class TotalPriceWebHtml {
    notify(){
        document.querySelector('#price-analitycs').innerHTML = `$${formatNumber(totalPriceWeb)} + iva`
    }
}
class PriceSeo {
    notify(subject){
        document.querySelector('#price-seo').innerHTML = subject.text
    }
}



//START objects change HTML in option Anatilitycs
let priceGtm = 400000
let priceAnalitycs = 300000
let priceEvents = 50000
let priceDataStudio = 500000
let totalPriceWeb = priceGtm + priceAnalitycs + priceEvents + priceDataStudio

let textListGtml = new TextObject()
let textListEvents = new TextObject()
let textListAnalitycs = new TextObject()
let textListDataEstudio = new TextObject()

let listAnalitycs  = new ListAnalitycs()
let listDataEstudio  = new ListDataEstudio()
let listEvent  = new ListEvent()
let listGtm  = new ListGtm()
let totalPriceWebHtml = new TotalPriceWebHtml()
textListDataEstudio.subscribe(listDataEstudio)
textListDataEstudio.subscribe(totalPriceWebHtml)
textListEvents.subscribe(listEvent)
textListEvents.subscribe(totalPriceWebHtml)
textListAnalitycs.subscribe(listAnalitycs)
textListAnalitycs.subscribe(totalPriceWebHtml)
textListGtml.subscribe(listGtm)
textListGtml.subscribe(totalPriceWebHtml)

// END objects change HTML in option Anatilitycs

//START objects change HTML in option SEO
let textPriceSeo = new TextObject()
let textListSeo = new TextObject()
let listSeo  = new ListSeo()
let priceSeo  = new PriceSeo()
textListSeo.subscribe(listSeo)
textPriceSeo.subscribe(priceSeo)

// END objects change HTML in option SEO


//START objects change HTML in design web site
    let textPriceInternalPages = new TextObject()
    let textMinimalPrice = new TextObject()
    let minimalPrice = new MinimalPrice()
    let priceInternalPage  = new PriceInternalPage()
    let listInternalPrice = new TextListInternalPages()
    let listGalery = new TextListGalery()
    let listFormContact = new TextListFormContact()
    let listSocial = new TextListSocial()
    let listVideos = new TextListVideos()
    let deleteListGalery = new DeleteTextListGalery()
    let deleteListFormContact = new DeleteTextListFormContact()
    let deleteListSocial = new DeleteTextListSocial()
    let deleteListVideos = new DeleteTextListVideos()

    textPriceInternalPages.subscribe(priceInternalPage)
    textPriceInternalPages.subscribe(listInternalPrice)
    textPriceInternalPages.subscribe(minimalPrice)
    textMinimalPrice.subscribe(minimalPrice)
    let priceHosting= 150000
    let priceDomain = 80000
    let totalPriceDesignWeb = 850000
    let basePriceLangingPage = 700000
    let basePriceInformativeSite = 850000
    let basePricePagePayment = 1800000
    let basePriceEcommerce = 3000000
    let priceVideos = 30000
    let priceGalery = 50000
    let oneMorePage = 100000
    let priceSocialNetwork = 30000
    let priceFormContact = 40000
    
    //END objects change HTML in design web site



    
    showProduct(1)
    
    