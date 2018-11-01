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
  // 1) recupero el indice de la cancion a borrar
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  // 2) borro la cancion de mi lista
  canciones.splice(indice, 1);
  limpiarTabla(); // Borro los nodos que ya tenia la tabla
  render(); // actualiza mi HTML con el array modificado
}

function limpiarTabla() {
  // remuevo TODOS los nodos del HTML con la clase fila
  $(".fila").remove();
}

function marcarComoEscuchada(cancion) {
  // 1) Actualizar el array de canciones
  // 1.1) Borrar la cancion del array de canciones
  // SPLICE => desde donde borro, cuantos elementos borro
  // Necesito el indice de la cancion
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  canciones.splice(indice, 1);
  // 1.2) Agregar la cancion en el array de escuchadas
  cancionesEscuchadas.push(cancion);

  // Veamos si se actualizaron los arrays
  console.log("canciones", canciones);
  console.log("cancionesEscuchadas", cancionesEscuchadas);
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

    // --------------------------------------
    // Agrego el boton "Ya la escuche"
    // --------------------------------------
    var btnEscuchada = $("<button>Ya la escuche!</button>");
    btnEscuchada.on("click", function() {
      // En el click del boton llamo a la funcion marcarComoEscuchada y le paso la cancion que ya escuche
      marcarComoEscuchada(canciones[i]);
    });

    var fila = $('<tr class="fila"></tr>');

    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);
    fila.append(btnDelete);
    // Hago append de mi nuevo boton
    fila.append(btnEscuchada);

    tabla.append(fila);
  }
}

crearTabla();
