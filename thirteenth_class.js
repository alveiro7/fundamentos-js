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

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = person => person.peso += INCREMENTO_PESO
const adelgazar = person => person.peso -= INCREMENTO_PESO

for (let i = 1; i <= DIAS_DEL_ANO; i++)
{
    //Declaramnos una variable que almacena un numero aleatorio entre 0 y 1
    let random = Math.random()

    if(random < 0.25)
    {
        aumentarDePeso(personaje)
        aumentarDePeso(personaje2)
        console.log(`Dia ${i} subio de peso`)

    }
    else if(random > 0.25)
    {
        adelgazar(personaje)
        adelgazar(personaje2)
        console.log(`Dia ${i} bajo de peso`)

    }
}

console.log(`Al final del año ${personaje.nombre} pesa ${personaje.peso.toFixed(1)} kg`)
console.log(`Al final del  año ${personaje2.nombre} pesa ${personaje2.peso.toFixed(1)} kg`)
