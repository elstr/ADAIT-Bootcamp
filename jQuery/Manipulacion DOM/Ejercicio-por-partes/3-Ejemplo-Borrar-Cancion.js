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
  render();
}

// -----------------------------------------------------
// Funcion que borra la cancion que recibe por parametro
// -----------------------------------------------------
function borrarCancion(cancion) {
  // 1) recupero el indice de la cancion a borrar
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  // 2) borro la cancion de mi lista
  canciones.splice(indice, 1);
  render();
}

function render() {
  var tabla = $("#tablaCanciones");
  for (let i = 0; i < canciones.length; i++) {
    var nombre = canciones[i].nombre;
    var autor = canciones[i].autor;
    var genero = canciones[i].genero;

    var tdNombre = "<td>" + nombre + "</td>";
    var tdAutor = "<td>" + autor + "</td>";
    var tdGenero = "<td>" + genero + "</td>";

    // --------------------------------------
    // Por cada cancion armo un boton Delete
    // --------------------------------------
    var btnDelete = $("<button>Delete</button>");
    btnDelete.on("click", function() {
      // En el click del boton le paso la cancion que tiene que borrar
      borrarCancion(canciones[i]);
    });

    var fila = $('<tr class="fila"></tr>');

    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);

    // Inserto mi boton en la fila
    fila.append(btnDelete);

    tabla.append(fila);
  }
}

crearTabla();
