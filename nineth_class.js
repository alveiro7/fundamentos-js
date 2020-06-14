
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

let x = 4, y='4'

/* Igualdad (==)
El operador de igualdad convierte los operandos si no son del mismo tipo, 
luego aplica una comparación estricta. 
Si ambos operandos son objetos, 
entonces JavaScript compara las referencias internas que son iguales cuando los operandos se refieren al mismo objeto en la memoria.*/
console.log(`Comparacion doble == --> ${x==y}`)
console.log(`Comparacion doble ==  Objetos --> ${personaje==personaje2}`)


/* Identidad / igualdad estricta (===)
El operador de identidad devuelve verdadero si los operandos son estrictamente iguales (ver arriba) sin conversión de tipo.*/
console.log(`Comparacion triple === --> ${x===y}`)
console.log(`Comparacion triple ===  Objetos --> ${personaje===personaje2}`)

