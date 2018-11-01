let canciones = [
  { nombre: "moscas en la casa", autor: "Shakira", genero: "pop" },
  { nombre: "Edge of Glory", autor: "Lady Gaga", genero: "pop" },
  { nombre: "Back in Black", autor: "AC/DC", genero: "rock" },
  { nombre: "No se tu", autor: "Luismi", genero: "Latin" }
];

function crearTabla() {
  var miTabla = $('<table id="tablaCanciones"></table>');
  var cabecera = "<th>Nombre</th><th>Autor</th><th>Genero</th>";
  miTabla.append(cabecera);
  var container = $("div.table-canciones");
  container.append(miTabla);
  // --------------------------------------
  // Llamo a la función que arma las filas
  // --------------------------------------
  render();
}

function render() {
  // Busco la tabla con el id tablaCanciones para poder insertarle filas
  var tabla = $("#tablaCanciones"); // selector por id

  // --------------------------------------
  // Recorro mi array de canciones
  // --------------------------------------
  for (let i = 0; i < canciones.length; i++) {
    // En cada iteracion tomo los valores que necesito del objeto cancion
    var nombre = canciones[i].nombre;
    var autor = canciones[i].autor;
    var genero = canciones[i].genero;
    // Defino los td o "celdas" que tendra mi fila
    // Concateno la informacion de cada cancion
    var tdNombre = "<td>" + nombre + "</td>";
    var tdAutor = "<td>" + autor + "</td>";
    var tdGenero = "<td>" + genero + "</td>";

    // Defino la fila con "notacion" jQuery $()
    // Porque a esta fila le tengo que hacer appends
    var fila = $('<tr class="fila"></tr>');
    // Inserto los td en mi fila
    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);
    // Inserto la fila en mi tabla
    tabla.append(fila);
  }
}

crearTabla();
