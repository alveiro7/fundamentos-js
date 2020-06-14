
/*
La sentencia return finaliza la ejecución de la función y especifica un valor 
para ser devuelto a quien llama a la función.
Una buena practica para resolver un algoritmo es crear funciones pequenas y estas a su vez
retornan valores que nos serviran para otras funciones
Un magic number es un valor numerico que esta fijo en el codigo por ejemplo las variables constantes
son aquellas que en toda la ejecucion del codigo su valor no va a cambiar, estas se deben escribir
en mayusculas y separadas con guiones
*/

let personaje = {
    nombre: 'Alveiro',
    apellido: 'Hoyos',
    edad: 17,
    ingeniero: true,
    matematico: false
}

let personaje2 = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 40,
    ingeniero: true,
    matematico: true
}

/*Las variables constantes presentan un ámbito de bloque (block scope) tal y como lo hacen las variables definidas usando la instrucción let,
con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. 
Las constantes no se pueden redeclarar.*/
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad (person)
{
    return  person.edad >= MAYORIA_DE_EDAD
}


function imprimirSiEsMayorDeEdad(person)
{
    if(esMayorDeEdad(person))
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es mayor de edad`)
    }
    else
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es menor de edad`)
     }
}


imprimirSiEsMayorDeEdad(personaje)
imprimirSiEsMayorDeEdad(personaje2)




