// Declaracion variables strings
var nombre='Alveiro', apellido='Hoyos'
console.log('Nombre completo --> '+ nombre + ' ' + apellido)

// toUpperCase, que sirve para transformar un string a mayusculas.
var nombreEnMayusculas = nombre.toUpperCase()
console.log('Nombre en mayuscular --> '+ nombreEnMayusculas)

// toLowerCase, que sirve para transformar un string a minusculas.
var apellidoEnMinusculas = apellido.toLowerCase()
console.log('Apellido en minusculas --> ' + apellidoEnMinusculas)


// El método charAt() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
var primeraLetraDelNombre = nombre.charAt(0)
console.log('Primera letra del nombre --> '+ primeraLetraDelNombre)

// La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código UTF-16.
var cantidadDeLetrasDelNombre = nombre.length
console.log('Cantidad de letras del nombre --> ' + cantidadDeLetrasDelNombre)


// Interporlacion de string, otra forma de concatenar sring.
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
console.log(`Nombre completo --> ${nombreCompleto} cantidad de letras del nombre ${nombreCompleto.length}`)

// El método substr() devuelve los caracteres de una cadena que comienzan en una localización especificada y de acuerdo al número de caracteres que se especifiquen.
var str = nombre.substr(1,2)
console.log(`Los caracteres 1 y 2 del nombre --> ${str}`)

//Desafío: Encuentra la última letra de su nombre
var str1 = nombre.substr(-1)
console.log(`La ultima letra del nombre es --> ${str1}`)