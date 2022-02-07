class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    
    saludar(fn) {
        var { nombre, apellido } = this
        var mensaje = `Hola, me llamo ${nombre} ${apellido}`
    }
}


class Animal extends Persona {
    constructor(nombre, apellido, altura, especie) {
        super(nombre, apellido, altura)
        this.especie = especie
    }
}
let animalito = new Animal('gato', 'loro', 1.80, 'especie')
let persona1 = new Persona('Juan', 'Perez', 1.80)
console.log(persona1.saludar('este es un mensaje'));
console.log(animalito);