// Los objetos en JavaScript nos ayudan a agrupar información. 
// Un objeto no es más que un conjunto de propiedades en donde cada propiedad está compuesta de una llave y un valor.
let personaje = {
    nombre: 'Alveiro',
    apellido: 'Hoyos',
    edad: 30

}

let personaje2 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 40
}

// Parametros pasados como referencia afectara al valor global del objeto
function cumple(person)
{
    person.edad += 1

}


cumple(personaje)
cumple(personaje2)
// El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
console.log(`Objeto modificado ${Object.values(personaje)}`)
console.log(`Objeto modificado ${Object.values(personaje2)}`)


/*Cuando los objetos se pasan como una referencia, 
estos se modifican fuera de la función. 
Para solucionar esto se puede crear un objeto diferente. 
Esto lo podemos hacer colocando tres puntos antes del nombre.*/

function cumpleValor(person)
{
    return {
        ...person,
        edad: person.edad + 5
    }
    console.log(`Objeto modificado ${Object.values(person)}`)



}

cumpleValor(personaje2)
cumpleValor(personaje)

