// funcion y scope de funciones
function suma(numero1, numero2) {
  // var numero1 = 10
  // var numero2 = 20
  validar(numero1, numero2);
  return numero1 + numero2;
}
// funcion con parametros
function validar(parametro1, parametro2) {
  // no tengo los numeros en este scope
}

// agarrar un nodo del html con jquery
// SELECTORES
// SELECTORES POR ID
$("#idQueEstoyBuscando"); // Agarro el nodo entero TODO EL NODO DEL HTML con sus atributos inclusive
$("#idQueEstoyBuscando").val(); // 12

// SELECTORES POR TAG
$("p");
$("h2");
$("div");
$("body");
$("article");
$("section");
// SELECTORES POR CLASE -> si tengo (clase1 clase2) solo recuperar clase1
$(".nombreDeLaClase1", ".nombreClase2");

// diferencia entre agarrar un nodo de jquery y su valor

// como cambiarle el valor a input que agarro con jquery
//1) me devuelve el valor actual de ese nodo
$("#inputNombre").val();
// 2) le setea el valor que yo le estoy pasando
$("#inputNombre").val("");

// como cambiarle el valor a un p que agarro con jquery
$("#parrafoPuntual").text("");
var textoDelParrafo = $("#parrafoPuntual").text();

// definir un nodo desde javascript con jquery e
// insertarlo en mi html
// Quiero definir una fila
var contenedor = $("<div class='contenedor'></div>");
var miParrafo = $("<p>Mi parrafo</p>");

miParrafo.append("<h2>Titulo</h2>");

contenedor.append(miParrafo);

// que es attr
var id = "fila" + "aladin1";
contenedor.attr("id", id);
contenedor.attr("id", "miId");

function validar() {
  if (x) {
    return false;
  }
  return true;
}

var miArray = [];

function agregarPeliculas() {
  var p = {};
  var esValido = validar();
  if (esValido) {
    miArray.push(p);
  }
}
