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

let personasAltas = people.filter(esAlta)
let personasBajas = people.filter(esBaja)

/* Si la arrow function lleva los corchetes {} encerrados en parentesis({}) quiere decir
que devolvera el objeto que estemos creando dentro*/
const pasarAlturaAcms = people =>({
  ...people, 
  altura: people.altura * 100
})

////El metodo map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos, en pocas palabras puedes modificar sus elementos
let personasCms = people.map(pasarAlturaAcms)
for (let i = 0; i < personasCms.length; i++)
{
  let person = personasCms[i]
  console.log(`Bienvenido ${person.nombre} ${person.apellido} con una altura ${person.altura.toFixed(2)}centimetros`)
}

