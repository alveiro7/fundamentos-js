// Los objetos en JavaScript nos ayudan a agrupar información. 
// Un objeto no es más que un conjunto de propiedades en donde cada propiedad está compuesta de una llave y un valor.
let personaje = {
    nombre: 'Alveiro',
    apellido: 'Hoyos',
    edad: 30

}

let personaje2 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 40
}

function imprimirNombreEnMayusculas(person)
{
    // var nombre = person.nombre 
    let {nombre, apellido, edad} = person

    console.log(`Nombre completo: ${nombre.toUpperCase()} ${apellido.toUpperCase()} ${edad} años`)
}

imprimirNombreEnMayusculas(personaje)
imprimirNombreEnMayusculas(personaje2)
imprimirNombreEnMayusculas({nombre : 'Diomedez', apellido: 'Diaz'})