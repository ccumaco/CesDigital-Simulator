
let inputInternalPages = document.querySelector('#internal-pages')
let typeOfSite = document.querySelector('#typeOfSite')
let interComponents = document.querySelectorAll('.input-components')

let objectCotization = {
    components: [],
    internalPages: inputInternalPages.value,
    typeOfSite: typeOfSite.value,
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
        document.querySelector('#modal-body').innerHTML = `
            <ul>
                <li class="item-to-pay">${objectCotization.components}</li>
                <li class="item-to-pay">${objectCotization.internalPages}</li>
                <li class="item-to-pay">${objectCotization.service}</li>
                <li class="item-to-pay">${objectCotization.typeOfSite}</li>
            </ul>
        `
    }
}

for (let i = 0; i < document.querySelectorAll(".input-style").length; i++) {
    const element = document.querySelectorAll(".input-style")[i];
    if (element.checked) {
        objectCotization.services = element.id
    }
}


function changeQuoteHtml(service){
    console.log('inter quote service', service);
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