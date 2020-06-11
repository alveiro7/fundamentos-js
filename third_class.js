var edad = 30
var peso = 92
console.log(`Mi edad es --> ${edad} años`)

// edad = edad + 1
edad += 1
console.log(`Edad modificada --> ${edad} años`)

// peso = peso - 1 
peso -= 1 
console.log(`Peso --> ${peso} kg`)

var sandwich = 5 
// peso = peso + sandwich
peso += sandwich
console.log(`Subi de peso --> ${peso} kg`)

var jugarAlFutbol = 10
// peso = peso + jugarAlFutbol
peso -= jugarAlFutbol
console.log(`Baje de peso --> ${peso} kg`)

var precioDeVino = 200.3
console.log(`Una botella de vino tiene valor de $${precioDeVino} USD`)

// compro 3 vinos
precioDeVino *= 3 
console.log(`Total pagado por 3 botellas de vino-->  $${precioDeVino} USD`)

var total

// Recerda que en operaciones con decimales debemos realizar operaciones adicionales para conseguir un resultado preciso.
total = (precioDeVino * 100)/100
console.log(`Total pagado valor mas exacto --> $${total} USD`)

// Para redondear una operación se utiliza la función: Math.round
console.log(`Total pagado valor mas exacto redondeo--> $${Math.round(total)} USD`)

//El método toFixed() formatea un número usando notación de punto fijo.
var totalStr = total.toFixed(3)
console.log(`Total pagado valaor mas exacto string --> $${totalStr} USD`)
console.log(`Total pagado valaor mas exacto total --> $${total.toFixed(2)} USD`)

// El método Number.parseFloat() parsea un argumento cadena y regresa un número de punto flotante.
var total2 = parseFloat(totalStr)
console.log(`Total pagado valaor mas exacto total float--> $${total2} USD`)

var pizza = 8
var personas = 3
var cantidadDePorcionesPorPersona = pizza / personas
var total3 = cantidadDePorcionesPorPersona.toFixed(2)
var total4 = parseFloat(total3)
console.log(`Cantidad de porciones por persona ${cantidadDePorcionesPorPersona} `)
