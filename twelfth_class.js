/*
Las funciones flecha se pueden igualar a una constante
Las funciones flecha cambiar la palabra function por una flecha => delante de los parametros
si la funcion retorna solo una cosa se puede eliminar el return y las llaves
si la funcion solo recibe un parametro este puede ir sin parentesis
se puede usar la desestructuracion de objetos en los parametros. */

let personaje = {
    nombre: 'Alveiro',
    apellido: 'Hoyos',
    edad: 17,
    ingeniero: true,
    matematico: false
}

let personaje2 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 40,
    ingeniero: true,
    matematico: true
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (person) {
//   return person.edad >= MAYORIA_DE_EDAD
// }
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

// Desafio crear una arrow function
const esMenorDeEdad = ({ edad }) => edad <= MAYORIA_DE_EDAD



function imprimirSiEsMayorDeEdad(person)
{
    if(esMayorDeEdad(person))
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es mayor de edad`)
    }
    else
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es menor de edad`)
     }
}

// (! esto significa negar)
function permitirAcceso(person){
    if(!esMayorDeEdad(person))
    {
        console.log(`ACCESO DENEGADO JOVEN ${person.nombre}`)
    }
    else
    {
        console.log(`ACCESO PERMITIDO SEÑOR ${person.nombre}`)

    }
}

function permitirAcceso1(person){
    if(esMenorDeEdad(person))
    {
        console.log(`ACCESO DENEGADO JOVEN ${person.apellido}`)
    }
    else
    {
        console.log(`ACCESO PERMITIDO SEÑOR ${person.apellido}`)

    }
}

imprimirSiEsMayorDeEdad(personaje)
imprimirSiEsMayorDeEdad(personaje2)
permitirAcceso(personaje)
permitirAcceso(personaje2)
permitirAcceso1(personaje)
permitirAcceso1(personaje2)




