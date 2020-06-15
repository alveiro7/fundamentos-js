/* Herencia
La herencia puede ser entendida como una subclase de una clase que ya existe. Esta subclase, hereda todas las propiedades de la clase padre, y además puede añadir o modificar las propiedades heredadas.
Para poder heredar, se debe de tener una clase padre con sus propios atributos y métodos.*/

//declaración de la clase padre
class Cliente {
  //constructor de la clase
  constructor(nombre, saldo) {
      this.nombre = nombre;
      this.saldo = saldo;
  }

  //métodos de la clase
  imprimirSaldo() {
      return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
  }

  //métodos estaticos, estos no necesitan instanciarse
  static bienvenida() {
      return `Bienvenido al cajero`;
  }
}

// En la sintaxis de JavaScrip se entiende que la clase hija extiende de la clase padre, y se utiliza la palabra reservada extends al hacer esto la clase hija tiene disponible para si tanto los atributos como los métodos de la clase padre.

//clase hija, que hereda de la clase padre
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, tipoEmpresa) {
      super(nombre, saldo); //va hacia el constructor padre y lo ejecuta
      this.telefono = telefono;
      this.tipoEmpresa = tipoEmpresa;
  }

  //una clase hija permite reescribir métodos de la clase padre
  static bienvenida () {
      return `Bienvenido al cajero para Empresas`;
  }
}