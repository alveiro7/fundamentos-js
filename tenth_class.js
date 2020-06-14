
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

function imprimirProfesiones(person)
{
    if (person.ingeniero)
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es ingeniero`)

    }

    if(person.matematico)
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es matematico`)


    }

}

function imprimirEdadSiEsMayor(person)
{
    if(person.edad<=18)
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es menor de edad`)
    }
    else
    {
        console.log(`El señor ${person.nombre} ${person.apellido} es mayor de edad`)
     }
}

imprimirProfesiones(personaje)
imprimirProfesiones(personaje2)
imprimirEdadSiEsMayor(personaje)
imprimirEdadSiEsMayor(personaje2)




