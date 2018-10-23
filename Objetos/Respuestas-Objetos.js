// // Ejercicios:

// // 1) Equinos
// // Definir una clase Equino junto con las características comúnes de los equinos
// // Agregarle un método galopar que retorne "Soy un " + tipo de equino + " y estoy galopando libre por la pradera"
// // Crear a partir de ella objetos Unicornios / Caballos / Ponys

class Equino {
  constructor(patas, pelo, tipo) {
    this.patas = patas;
    this.pelo = pelo;
    this.tipo = tipo;
  }
  galopar() {
    return "Soy un " + this.tipo + " y estoy galopando libre por la pradera";
  }
}

const miPony = new Equino(4, "corto", "Pony");
console.log(miPony.galopar());

// // Ejercicios relacionados entre sí
// // 1) Crear un objeto que represente un Auto
// // 	•	Debera tener las propiedades color,
// //       modelo, patente, marca, prendido,
// //       velocidad y velocidad maxima, peso
// // 	•	Debera tener los metodos encender,
//  //      acelerar, mostrar velocidad actual, frenar y apagar
// // 	•	Por lo tanto mediante el metodo acelerar tendra que
// //       ir aumentando la propiedad velocidad hasta llegar
// //       a la velocidad maxima.

var auto = {
  modelo: "2018",
  patente: "ABC118",
  marca: "AUDI",
  prendido: false,
  velocidadActual: 0,
  velocidadMax: 250,
  peso: 200,
  encender: function() {
    this.prendido = true;
  },
  apagar: function() {
    this.prendido = false;
  },
  acelerar: function() {
    for (
      this.velocidadActual;
      this.velocidadActual <= this.velocidadMax;
      this.velocidadActual++
    ) {
      console.log("Estamos acelerandoooo!! - ", this.velocidadActual);
    }
  },
  frenar: function() {
    for (
      this.velocidadActual;
      this.velocidadActual >= 0;
      this.velocidadActual--
    ) {
      console.log("Estamos frenandoooo!! - ", this.velocidadActual);
    }
  },
  prendidoApagado: function() {
    // Caso 1 - Auto prendido necesito que se apague
    // prendido = true => !prendido = !true => false
    // Caso 2 - Auto apagado necesito que se prenda
    // prendido = false => !prendido = !false => true
    // el operador ! niega la condicion
    this.prendido = !this.prendido;
  }
};

// //    Crear una función para cargar un auto a un camion
// // 	•	El camnion tiene un peso maximo de carga
// // 	•	El objeto camion Debera validar con cada auto
// //       ingresado si esta por debajo del peso
// //       o si ya no lo puede agregar
// // 	•	Ademas de almacenar los autos debe tener
// //       la posibilidad de validar que no tenga
// //       patentes repetidas y que me devuelva todas
// //       las patentes que tiene a bordo.
