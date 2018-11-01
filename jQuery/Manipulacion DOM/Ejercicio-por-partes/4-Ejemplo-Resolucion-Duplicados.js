let canciones = [
  { nombre: "moscas en la casa", autor: "Shakira", genero: "pop" },
  { nombre: "Edge of Glory", autor: "Lady Gaga", genero: "pop" },
  { nombre: "Back in Black", autor: "AC/DC", genero: "rock" },
  { nombre: "No se tu", autor: "Luismi", genero: "Latin" },
  {
    nombre: "ponerte en 4",
    autor: "Los amigos invisibles",
    genero: "latin pop"
  },
  { nombre: "Bodak Yellow", autor: "Carbi B", genero: "HipHop" }
];

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

  // --------------------------------------
  // Borro los nodos que ya tiene la tabla
  // --------------------------------------
  limpiarTabla();

  // -----------------------------------------
  // Llamo a render para que actualice mi HTML
  // -----------------------------------------
  render();
}

function limpiarTabla() {
  // remuevo TODOS los nodos del HTML con la clase fila
  $(".fila").remove();
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

    var fila = $('<tr class="fila"></tr>');

    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);
    fila.append(btnDelete);

    tabla.append(fila);
  }
}

crearTabla();
