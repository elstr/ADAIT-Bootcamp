// // Objetos
// // Cómo definir un objeto?

// // 1. Objeto Literal / Object Literals

// var / let / const nombreObjeto = {}
// Propiedades => key: value
// Método => nombreMetodo: fn(){}

var auto = {
  patente: "AXW678", // Propiedad
  color: "azul",
  velocidadMax: 250,
  velocidadActual: 0,
  encendido: false,
  encender: function() {}, // Metodo
  acelerar: function() {},
  frenar: function() {}
};

var dinosaurio = {
  tipo: "FaraDino",
  caracteristicas: "No tiene motricidad, maldita xea",

  recuperarInformacion: function() {
    return "Tipo: " + this.tipo + " Características: " + this.caracteristicas;
  }
};

alert(dinosaurio.recuperarInformacion());

// // KESESO - Qué es ese THIS que aparece ahí???
// // Hace referencia al objeto en sí mismo, al "dueño" de esas propiedades y esos métodos que podemos invocar.
// // THIS habla de ESE objeto PUNTUAL y no de otro

// // Una forma más fácil de entender this es cuando utilizamos una clase y tenemos más de un objeto

class Dinosaurio {
  constructor(tipo, color, personalidad) {
    this.tipo = tipo;
    this.color = color;
    this.personalidad = personalidad;
  }
  recuperarInformacion() {
    return (
      "Tipo: " +
      this.tipo +
      " Color: " +
      this.color +
      " Personalidad: " +
      this.personalidad
    );
  }
}

var dino1 = new Dinosaurio("T-Rex", "verde amarronado", "sacados");
dino1.recuperarInformacion();
var dino2 = new Dinosaurio("Velociraptor", "verde oscuro", "manijas");
dino2.recuperarInformacion();
var dino3 = new Dinosaurio("Brontosaurus", "verde grisaceo", "muy suaves");
dino3.recuperarInformacion();

// // En la ejecución de cada recuperarInformacion()
// // this hace referencia al objeto puntual sobre el cual estamos llamando la funcion
// // si pedimos la info de dino1 -> this = dino1

// // Sigamos...
// // 2. Construcción - Constructed

var myObj = new Object();
myObj.key = value;

// // Qué diferencia hay ?
// // Que en el literal podemos volcar todas las props y metodos de una
// // En constructed tenes que ir agregando uno por uno
