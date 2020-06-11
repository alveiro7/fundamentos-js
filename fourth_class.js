var nombre = 'Alveiro', edad = 30 

// funcion sin pasar parametros
function imprimirEdad()
{
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad()

// funcion pasando parametros
function imprimirEdad2(n,e)
{
    console.log(`${n} tiene ${e} años`)

}

imprimirEdad2('Kali', 90)
imprimirEdad2(29 , 'Kali')
imprimirEdad2()