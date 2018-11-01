let canciones = [
  { nombre: "moscas en la casa", autor: "Shakira", genero: "pop" },
  { nombre: "Edge of Glory", autor: "Lady Gaga", genero: "pop" },
  { nombre: "Back in Black", autor: "AC/DC", genero: "rock" },
  { nombre: "No se tu", autor: "Luismi", genero: "Latin" }
];

let cancionesEscuchadas = [];

function crearTabla() {
  var miTabla = $('<table id="tablaCanciones"></table>');
  var cabecera = "<th>Nombre</th><th>Autor</th><th>Genero</th>";
  miTabla.append(cabecera);
  var container = $("div.table-canciones");
  container.append(miTabla);
  render();
}

function borrarCancion(cancion) {
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  canciones.splice(indice, 1);
  limpiarTabla();
  render();
}

function limpiarTabla() {
  // remuevo TODOS los nodos del HTML con la clase fila
  $(".fila").remove();
}

function marcarComoEscuchada(cancion) {
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  canciones.splice(indice, 1);
  cancionesEscuchadas.push(cancion);

  // ------------------------------------------------------------------
  // Actualizar tabla canciones cuando marco una cancion como escuchada
  // ------------------------------------------------------------------
  limpiarTabla(); // Borro los nodos que ya tenia la tabla
  render(); // actualiza mi HTML con el array modificado
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

    var btnDelete = $("<button>Delete</button>");
    btnDelete.on("click", function() {
      borrarCancion(canciones[i]);
    });

    var btnEscuchada = $("<button>Ya la escuche!</button>");
    btnEscuchada.on("click", function() {
      marcarComoEscuchada(canciones[i]);
    });

    var fila = $('<tr class="fila"></tr>');

    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);
    fila.append(btnDelete);
    fila.append(btnEscuchada);

    tabla.append(fila);
  }
}

crearTabla();
