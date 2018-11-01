// ------------------------------------
// Defino mi array de canciones
// ------------------------------------
let canciones = [
  { nombre: "moscas en la casa", autor: "Shakira", genero: "pop" },
  { nombre: "Edge of Glory", autor: "Lady Gaga", genero: "pop" },
  { nombre: "Back in Black", autor: "AC/DC", genero: "rock" },
  { nombre: "No se tu", autor: "Luismi", genero: "Latin" }
];

function crearTabla() {
  // Crea la tabla dinámicamente
  var miTabla = $('<table id="tablaCanciones"></table>');
  // Crea la cabecera
  var cabecera = "<th>Nombre</th><th>Autor</th><th>Genero</th>";
  // Inserto la cabecera en la tabla
  miTabla.append(cabecera);
  // Agarro el div que tiene la clase tabla-canciones con mi selector
  var container = $("div.table-canciones"); // selector
  // Inserto mi tabla en el div
  container.append(miTabla);
}

// ------------------------------------
// Llamo a la funcion que crea la tabla
// ------------------------------------
crearTabla();
