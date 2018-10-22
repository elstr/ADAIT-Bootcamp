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

// // Cómo recuperar los valores de un objeto?
console.log(dino1.tipo);
console.log(dino1["tipo"]);

// // Qué pasa si no sé cómo se llaman las propiedades?
// // ES6 Al rescate -> Object.keys y Object.values
// // Dinámicamente recuperar valores de un objeto
const mesa = {
  cantidadPatas: 4,
  tipo: "rectangular",
  largo: 1.2,
  ancho: 0.6
};

// // Object.keys retorna un array con los nombres de las propiedades de un objeto
console.log(Object.keys(mesa));
// // Object.values retorna un array con los valores asignados a esas propiedades
console.log(Object.values(mesa));

// // Desafío:
// // Con object keys y object values recuperar los valores de las propiedades dinámicamente
const props2 = Object.keys(mesa);
for (var i = 0; i < props2.length - 1; i++) {
  console.log(mesa[props2[i]]);
}
