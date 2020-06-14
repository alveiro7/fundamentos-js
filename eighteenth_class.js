let personaje = {
  nombre: 'Alveiro',
  apellido: 'Hoyos',
  altura: 1.50,
  genero: 'Masculino'
}

let personaje2 = {
  nombre: 'Tony',
  apellido: 'Stark',
  altura: 1.89,
  genero: 'Masculino'
}

let personaje3 = {
  nombre: 'Ulises',
  apellido: 'de Itaca',
  altura: 1.70,
  genero: 'Masculino'
}
var personaje4 = {
  nombre: 'Hector',
  apellido: 'de Troya',
  altura: 1.80,
  genero: 'Masculino'
}
var personaje5 = {
  nombre: 'Penelope',
  apellido: 'de Itaca',
  altura: 1.90,
  genero: 'Femenino'
}
var personaje6 = {
  nombre: 'Helena',
  apellido: 'de Troya',
  altura: 2.00,
  genero: 'Femenino'
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.8
let people= [personaje, personaje2, personaje3, personaje4, personaje5, personaje6]

// METODO FILTER
/*
-Crea un nuevo array con todos los elementos que cumplan la condición implementada 
por la función dada.
-Es una buena practica crear la funcion fuera del filter y luego llamarla dentro de el;
-El array original no se modifica*/
let personasAltas = people.filter(esAlta)
let personasBajas = people.filter(esBaja)


for (let i = 0; i < personasAltas.length; i++)
{
  let person = personasAltas[i]
  console.log(`Bienvenido ${person.nombre} ${person.apellido} pertenece al grupo de los altos con una altura ${person.altura.toFixed(2)}mts`)
}

for (let i = 0; i < personasBajas.length; i++)
{
  let person = personasBajas[i]
  console.log(`Bienvenido ${person.nombre} ${person.apellido} pertenece al grupo de los bajos con una altura ${person.altura.toFixed(2)}mts`)
}