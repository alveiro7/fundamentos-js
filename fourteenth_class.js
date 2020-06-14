let personaje = {
    nombre: 'Alveiro',
    apellido: 'Hoyos',
    edad: 17,
    peso: 90
}

let personaje2 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 40,
    peso : 76
}

console.log(`Al inicio del año ${personaje.nombre} pesa ${personaje.peso} kg`)
console.log(`Al inicio del año ${personaje2.nombre} pesa ${personaje2.peso} kg`)

/*function aumentarDePeso(person)
{
    return person.peso += 200
}*/

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = person => person.peso += INCREMENTO_PESO
const adelgazar = person => person.peso -= INCREMENTO_PESO  
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = personaje.peso - 3
const META_1 = personaje2.peso - 3

let dias = 0

while((personaje.peso > META) && (personaje2.peso > META_1))
{
    // debugger
    //La sentencia debugger invoca cualquier funcionalidad de depuración disponible, tiene la misma función que un breakpoint. Si la funcionalidad de depuración no está disponible, esta sentencia no tiene efecto alguno.
    // realizar paso a paso o examinar código que contiene 
    // potenciales errores    
    if(comeMucho())
    {
        aumentarDePeso(personaje)
        aumentarDePeso(personaje2)
    }
    if(realizaDeporte())
    {
        adelgazar(personaje)
        adelgazar(personaje2)
    }
    dias += 1
}

//Como floor es un método estático de Math, siempre debe usarse como Math.floor(), en lugar de usarlo como un método de un objeto Math creado.
//Si se pasa 45.95 a getFloor, éste devuelve 45; si se le pasa -45.95,  devuelve -46.

console.log(`Pasaron ${dias} dias hasta que ${personaje.nombre} adelgazara 3kg -->pesa ${Math.floor(personaje.peso)} kg`)
console.log(`Pasaron ${dias} dias hasta que ${personaje2.nombre} adelgazara 3kg -->pesa ${Math.floor(personaje2.peso)} kg`)