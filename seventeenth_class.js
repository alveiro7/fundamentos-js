let personaje = {
  nombre: 'Alveiro',
  apellido: 'Hoyos',
  altura: 1.90,
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

let people= [personaje, personaje2, personaje3, personaje4, personaje5, personaje6]

for (let i = 0; i < people.length; i++)
{
  let person = people[i]
  console.log(`Bienvenido ${person.nombre} ${person.apellido} en su documento registra una altura ${person.altura.toFixed(2)}mts y genero ${person.genero}`)
}