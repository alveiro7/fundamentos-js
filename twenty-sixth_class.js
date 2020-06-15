/*
Se pueden pasar funciones como parametros
La funcion que recibe una funcion por parametro puede o no recibir a esa funcion y de igual manera se va a
ejecutar
Hay varios datos que devueven  un false como por ejemplo: 0, null, ' ', undefined 
y hay otros que devuelven un true como por ejemplo : [], {}, 'Hola'
Una funcion que existe, es decir, si pasa algo va a dar verdadero dentro de una condicion si no pasa nada, 
va a devolver undefined y undefined es false
*/
class Persona {
  constructor(nombre, apellido, altura) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.altura = altura;
  }

  //métodos de la clase
  saludar(fn) {
      let {nombre, apellido} = this
      console.log(`Hola me llamo ${nombre}, y mi apellido es ${apellido}`)
      if (fn){
        fn(nombre, apellido)
      }
  }
}
// En la sintaxis de JavaScrip se entiende que la clase hija extiende de la clase padre, y se utiliza la palabra reservada extends al hacer esto la clase hija tiene disponible para si tanto los atributos como los métodos de la clase padre.

//clase hija, que hereda de la clase padre
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
      super(nombre, apellido, altura); //va hacia el constructor padre y lo ejecuta
    }

    saludar(fn) {
    // let nombre = this.nombre
    // let apellido = this.apellido
    let {nombre, apellido} = this
    console.log(`Hola me llamo ${nombre} ${apellido}, y soy desarrolladror/a`)
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen dia ${nombre} ${apellido}`)
  if(esDev){
    console.log(`ah mira, no sabia que eras desarrollador/a`)
  }
}

let  alveiro = new Desarrollador('Alveiro','Hoyos', 1.50)

let tony = new Persona ('Tony', 'Stark', 1.89)  

let ulises = new Persona ('Ulises', 'de Itaca', 1.70)

let hector = new Persona ( 'Hector','de Troya', 1.80)

alveiro.saludar(responderSaludo)
alveiro.saludar()
tony.saludar(responderSaludo)
ulises.saludar(responderSaludo)
hector.saludar()