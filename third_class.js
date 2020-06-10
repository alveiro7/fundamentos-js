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

// compro 3 vinos
precioDeVino *= 3 
console.log(`Total pagado -->  $${precioDeVino} USD`)

var total
total = (precioDeVino * 100 * 3)/100
console.log(`Total pagado valor mas exacto --> $${total} USD`)
console.log(`Total pagado valor mas exacto --> $${Math.round(total)} USD`)

