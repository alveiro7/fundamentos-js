/*
Tips para recordar:

    -En Javascript hay un objeto global y este depende en donde se este ejecutando Javascript. Si lo ejecutamos 
    en el browser, el objeto global seria window.
    -La variableglobal es la que se encuentra en window y la variable local es la que se encuentra
    dentro de una funcion 
    -Para evitar que una funcion modifique una variableglobal se tiene que pasar la variable a la funcion
    mediante un parametro 
	- Javascript te permite nombrar una variable local y global
de la misma forma 

 */

var nombre='Alveiro'
var nombre2='Kali'

// Alcance global
function imprimirNombreEnMayusculas()
{
    nombre = nombre.toUpperCase()
    console.log(`Mi nombre en mayusculas es ${nombre}`)
}

imprimirNombreEnMayusculas()
// En Javascript hay un objeto global y este depende en donde se este ejecutando Javascript. Si lo ejecutamos en el browser, el objeto global seria window.
console.log(`La variable global nombre fue modificada ${window.nombre}`)


// Alcance local
function imprimirNombreEnMayusculas2(nombre2)
{   
    nombre2 = nombre2.toUpperCase()

    console.log(`Mi nombre en mayusculas es ${nombre2}`)
}
imprimirNombreEnMayusculas2(nombre2)
console.log(`La variable global nombre no fue modificada ${window.nombre2}`)
