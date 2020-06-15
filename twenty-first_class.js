
/* Como funcionan las clases en JavaScript
Las clases son funciones cuya sintaxis tiene dos componentes:
+ Exresiones 
+ Declaraciones
this hace referencia al objeto que se acaba de construir */

function persona(nombre, apellido, altura)
{
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
// No es necesario colocar un return this porque esta implicito en JavaScript que se retorne el objeto que se esta creando


// Podemos agregar metodos a la clase creada ussando prototype
persona.prototype.saludar = function()
{
  altura= (this.altura>=1.8)?'alto' : 'bajo'
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy ${altura}`)
}

let  alveiro = new persona ('Alveiro','Hoyos', 1.50)

let tony = new persona ('Tony', 'Stark', 1.89)  

let ulises = new persona ('Ulises', 'de Itaca', 1.70)

let hector = new persona ( 'Hector','de Troya', 1.80)

alveiro.saludar()
tony.saludar()
ulises.saludar()
hector.saludar()