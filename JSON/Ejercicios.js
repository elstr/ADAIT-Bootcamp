// // Resolver los siguientes ejercicios utilizando jQuery y JSON

// // 0) Dado el siguiente bloque de codigo construir un objeto JSON llamado persona
// let nombre = "Juan";
// let apellido = "Perez";
// let edad = "61";

// var persona = {
//   nombre: nombre,
//   apellido: apellido,
//   edad: edad
// };

// console.log(JSON.stringify(persona));

// // 1) Definir un JSON llamado producto que contenga nombre, categoria y precio
// var producto = {
//   nombre: "coca cola",
//   categoria: "bebida",
//   precio: 75
// };

// console.log(JSON.stringify(producto));

// // 2) Definir un JSON llamado productos que contenga un array de productos.
// // Los productos deberan ser objetos y tener nombre, categoria y precio
// var productos = [
//   {
//     nombre: "coca cola",
//     categoria: "bebida",
//     precio: 75
//   },
//   {
//     nombre: "fanta",
//     categoria: "bebida",
//     precio: 60
//   },
//   {
//     nombre: "pizza",
//     categoria: "comida",
//     precio: 180
//   }
// ];

// console.log(JSON.stringify(productos));

// // 3) Dados los objetos
// // persona1 = {nombre: "juana", apellido:"perez"}
// // telefono1={pais:54, area: 911, numero: 40395223 }
// // telefono2={pais:54, area: 911, numero: 51756283 }
// // Asignarle los telefonos a la persona en un array y luego construir el objeto JSON. Mostrar en consola
// var persona1 = { nombre: "juana", apellido: "perez" };
// var telefono1 = { pais: 54, area: 911, numero: 40395223 };
// var telefono2 = { pais: 54, area: 911, numero: 51756283 };
// persona1.telefonos = [telefono1, telefono2];
// persona1 = JSON.stringify(persona1);
// console.log(persona1);

// // 4) Dado el ejercicio 3, agregarles a esas personas la propiedad gusto de pizza favorita, pasar a JSON y mostrar en consola
// var personaGustosPizza = JSON.parse(persona1);
// personaGustosPizza.gustosPizza = ["Muzza", "Jamon y Morron", "Palmitos"];
// personaGustosPizza = JSON.stringify(personaGustosPizza);
// console.log(personaGustosPizza);

// // 5) Dado el ejercicio 4, agregarles un array que sea color favorito y mostrar en consola
// var personaColores = JSON.parse(personaGustosPizza);
// personaColores.coloresFavoritos = ["Verde", "Azul", "Negro"];
// personaColores = JSON.stringify(personaColores);
// console.log(personaColores);

// // 6) Crear un archivo HTML con 3 inputs
// // Nombre, Apellido, Edad
// // Agregar un boton que sea "Generar JSON"
// // Cuando se clickea el boton, tomar los campos de los inputs, crear un objeto persona y generar un JSON
// // Mostrar el JSON en pantalla
// function generarJSON() {
//   var nombre = $("#nombre").val();
//   var apellido = $("#apellido").val();
//   var edad = $("#edad").val();
//   var persona = {
//     nombre: nombre,
//     apellido: apellido,
//     edad: edad
//   };

//   var parrafo = $("#parrafo");
//   parrafo.text(JSON.stringify(persona));
// }
// // 7) Dado el ejercicio 6
// // Validar que los campos estén completos
// // Si están completos, convertir a JSON
// // Si están incompletos, mostrar un mensaje
// function generarJSON() {
//   var nombre = $("#nombre").val();
//   var apellido = $("#apellido").val();
//   var edad = $("#edad").val();
//   var parrafo = $("#parrafo");
//   if (nombre && apellido && edad) {
//     var persona = {
//       nombre: nombre,
//       apellido: apellido,
//       edad: edad
//     };
//     parrafo.text(JSON.stringify(persona));
//     return;
//   } else {
//     parrafo.text("Completar los campos!");
//   }
// }
