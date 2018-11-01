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

function crearTablaCancionesEscuchadas() {
  var miTablaCancionesEscuchadas = $(
    '<table id="tablaCancionesEscuchadas"></table>'
  );
  var cabecera = "<th>Nombre</th><th>Autor</th><th>Genero</th>";
  miTablaCancionesEscuchadas.append(cabecera);
  var container = $("div.table-canciones-escuchadas");
  container.append(miTablaCancionesEscuchadas);
}

function borrarCancion(cancion) {
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  canciones.splice(indice, 1);
  limpiarTabla(); // Borro los nodos que ya tenia la tabla
  render(); // actualiza mi HTML con el array modificado
}

function limpiarTabla() {
  // remuevo TODOS los nodos del HTML con la clase fila
  $(".fila").remove();
}

function marcarComoEscuchada(cancion) {
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  canciones.splice(indice, 1);
  cancionesEscuchadas.push(cancion);

  // Limpio y actualizo la tabla de canciones
  limpiarTabla();
  render();

  // -------------------------------------------------------
  // Renderizar las canciones del array canciones escuchadas
  // -------------------------------------------------------
  // Para que no nos suceda la duplicación de nodos
  // Llamo a una funcion que limpia la tabla de canciones escuchadas
  limpiarTablaEscuchadas();
  // Llamo a la funcion que renderiza las canciones escuchadas
  renderizarTablaCancionesEscuchadas();
}

// -------------------------------------------------------
// Funcion que limpia la tabla de canciones escuchadas
// -------------------------------------------------------
function limpiarTablaEscuchadas() {
  // remuevo TODOS los nodos del HTML con la clase filaEscuchadas
  $(".filaEscuchadas").remove();
}

// -------------------------------------------------------
// Funcion que renderiza las canciones escuchadas
// -------------------------------------------------------
function renderizarTablaCancionesEscuchadas() {
  // 1) agarrar mi tabla de canciones escuchadas
  var tablaCancionesEscuchadas = $("#tablaCancionesEscuchadas");
  // 2) recorrer mis canciones escuchadas
  for (let i = 0; i < cancionesEscuchadas.length; i++) {
    // 2.1) definir una fila
    var fila = $('<tr class="filaEscuchadas"></tr>');
    // 2.2) armar los td con la data de la cancion escuchada
    var nombre = cancionesEscuchadas[i].nombre;
    var autor = cancionesEscuchadas[i].autor;
    var genero = cancionesEscuchadas[i].genero;

    var tdNombre = "<td>" + nombre + "</td>";
    var tdAutor = "<td>" + autor + "</td>";
    var tdGenero = "<td>" + genero + "</td>";

    // 2.3) Hacer append de los td a la fila
    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);

    // 2.4) Hacer append de la fila a la tabla de canciones escuchadas
    tablaCancionesEscuchadas.append(fila);
  }
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
crearTablaCancionesEscuchadas();
