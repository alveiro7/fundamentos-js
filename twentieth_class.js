let personaje = {
  nombre: 'Alveiro',
  apellido: 'Hoyos',
  altura: 1.50,
  genero: 'Masculino',
  cantidadDeLibros: 111
}

let personaje2 = {
  nombre: 'Tony',
  apellido: 'Stark',
  altura: 1.89,
  genero: 'Masculino',
  cantidadDeLibros: 9000
}

let personaje3 = {
  nombre: 'Ulises',
  apellido: 'de Itaca',
  altura: 1.70,
  genero: 'Masculino',
  cantidadDeLibros: 1114
}
var personaje4 = {
  nombre: 'Hector',
  apellido: 'de Troya',
  altura: 1.80,
  genero: 'Masculino',
  cantidadDeLibros: 187
}
var personaje5 = {
  nombre: 'Penelope',
  apellido: 'de Itaca',
  altura: 1.90,
  genero: 'Femenino',
  cantidadDeLibros: 1811
}
var personaje6 = {
  nombre: 'Helena',
  apellido: 'de Troya',
  altura: 2.00,
  genero: 'Femenino',
  cantidadDeLibros: 11187
}


let people= [personaje, personaje2, personaje3, personaje4, personaje5, personaje6]


// var acum = 0
//
// for (var i = 0; i < personas.length; i++) {
//   acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

let totalDeLibros = people.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)