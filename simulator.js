
let inputInternalPages = document.querySelector('#internal-pages')
let typeOfSite = document.querySelector('#typeOfSite')
let interComponents = document.querySelectorAll('.input-components')

let objectCotization = {
    components: [],
    typeOfSite: typeOfSite.value,
    internalPages: inputInternalPages.value
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


for (let i = 0; i < document.querySelectorAll(".input-style").length; i++) {
    const element = document.querySelectorAll(".input-style")[i];
    if (element.checked) {
        objectCotization.services = element.id
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


objectCotization.components = []
objectCotization.typeOfSite = typeOfSite.value
console.log(objectCotization);