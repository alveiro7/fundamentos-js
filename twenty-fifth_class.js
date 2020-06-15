//declaración de la clase padre
class Persona {
  //constructor de la clase
/* El método constructor es un método especial para crear e inicializar un objeto creado a partir 
de una clase. Antes de declarar los atributos con this se tiene que usar el metodo super()
para indicar que atributos se estan heredando de la clase padre.*/
  
  constructor(nombre, apellido, altura) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.altura = altura;
  }

  //métodos de la clase
  saludar() {
      return `Hola me llamo ${this.nombre}, y mi apellido es ${this.apellido}`;
  }

  soyAlto(){
      return this.altura > 1.8
  }
}


// En la sintaxis de JavaScrip se entiende que la clase hija extiende de la clase padre, y se utiliza la palabra reservada extends al hacer esto la clase hija tiene disponible para si tanto los atributos como los métodos de la clase padre.

//clase hija, que hereda de la clase padre
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
      super(nombre, apellido, altura); //va hacia el constructor padre y lo ejecuta


  }

  saludar() {
    return `Hola me llamo ${this.nombre} ${this.apellido} , y soy desarrolladror/a` ;
    }

}


let  alveiro = new Desarrollador('Alveiro','Hoyos', 1.50)

let tony = new Persona ('Tony', 'Stark', 1.89)  

let ulises = new Persona ('Ulises', 'de Itaca', 1.70)

let hector = new Persona ( 'Hector','de Troya', 1.80)