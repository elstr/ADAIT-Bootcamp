// ARRIBA DE TODO DEFINO MIS VARIABLES GLOBALES
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
  console.log(cancion);
  // 1) recupero el indice de la cancion a borrar
  var indice = canciones.findIndex(c => c.nombre === cancion.nombre);
  console.log(indice);
  // 2) borro la cancion de mi lista
  canciones.splice(indice, 1);
  limpiarTabla();
  render();
}

function limpiarTabla() {
  $(".fila").remove();
}
function limpiarTablaEscuchadas() {
  $(".filaEscuchadas").remove();
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
  // Estas lineas hacen exactamente lo mismo -> te gana la paja
  // console.log({ canciones });
  // console.log("canciones", canciones);
  limpiarTabla();
  render();

  // 2) Renderizar mi tabla de canciones escuchadas
  limpiarTablaEscuchadas();
  renderizarTablaCancionesEscuchadas();
}

function render(cancionesAMostrar) {
  // si canciones es undefined, porque no me pasaron nada por parametros, uso lo que tengo en canciones
  if (!cancionesAMostrar) {
    cancionesAMostrar = canciones;
  }

  var tabla = $("#tablaCanciones");
  for (let i = 0; i < cancionesAMostrar.length; i++) {
    var nombre = cancionesAMostrar[i].nombre;
    var autor = cancionesAMostrar[i].autor;
    var genero = cancionesAMostrar[i].genero;

    var tdNombre = "<td>" + nombre + "</td>";
    var tdAutor = "<td>" + autor + "</td>";
    var tdGenero = "<td>" + genero + "</td>";

    var btnDelete = $("<button>Delete</button>");
    btnDelete.on("click", function() {
      borrarCancion(cancionesAMostrar[i]);
    });

    var btnEscuchada = $("<button>Ya la escuche!</button>");
    btnEscuchada.on("click", function() {
      marcarComoEscuchada(cancionesAMostrar[i]);
    });

    // si no tengo el nodo en mi html
    // 1) o no estoy haciendo el append (me lo morfe)
    // 2) o estoy haciendo append a cualquier frula (la estas cagando en el selector)
    var fila = $('<tr class="fila"></tr>');

    fila.append(tdNombre);
    fila.append(tdAutor);
    fila.append(tdGenero);
    fila.append(btnDelete);
    fila.append(btnEscuchada);

    tabla.append(fila);
  }
}

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

    // 2.4) Hacer append de la fila a la tabla
    tablaCancionesEscuchadas.append(fila);
  }
}

function agregarCancion () {
  // oculto el mensaje de error
  $('#mensaje-error').hide();

  // primero voy a buscar los inputs del formulario
  let inputNombre = $('.form-agregar-cancion input[name="nombre"]');
  let inputAutor = $('.form-agregar-cancion input[name="autor"]');
  let inputGenero = $('.form-agregar-cancion input[name="genero"]');

  // de cada input, con .val() puedo obtener el valor que escribimos por teclado
  let nombreNuevaCancion = inputNombre.val();
  let autorNuevaCancion = inputAutor.val();
  let generoNuevaCancion = inputGenero.val();

  // si hay algun input que no este completo, muestro el mensaje de error al usuario
  if (nombreNuevaCancion === '' || autorNuevaCancion === '' || generoNuevaCancion === '') {
    $('#mensaje-error').text('Todos los campos son obligatorios').css('color', 'red').show();
    // y finalmente retorno porque no puedo seguir ejecutando la funcion si no tenemos todos los datos
    return;
  }

  // creo el nuevo objeto, con la info que sacamos del input
  let nuevaCancion = {
   nombre: nombreNuevaCancion,
   autor: autorNuevaCancion,
   genero: generoNuevaCancion,
  };

  // agrego el nuevo objeto cancion al array de canciones
  canciones.push(nuevaCancion);

  // como modifique el array de canciones, tengo que volver a limpiar la tabla y volver a generar
  limpiarTabla();
  render();

  // al final, vacio los 3 inputs
  inputNombre.val('');
  inputAutor.val('');
  inputGenero.val('');
}

// en esta funcion simplemente agrego el evento para el submit del formulario
function crearFormularioAgregarCancion () {
  $('#mensaje-error').hide();

  $('.form-agregar-cancion').on('submit', function (e) {
    e.preventDefault();
    // y cuando se hace el submit del formulario llamo a mi funcion agregarCancion
    agregarCancion();
  })
}

function filtrarCanciones () {
  // primero voy a buscar el input donde escribimos el genero
  let inputGenero = $('.form-filtrar-canciones input[name="genero"]');
  // con .val() puedo obtener el valor que escribimos por teclado
  let generoAFiltrar = inputGenero.val();

  // si el genero esta vacio, directamente mostramos de nuevo TODAS las canciones
  if (generoAFiltrar === '') {
    limpiarTabla();
    render();
    return;
  }

  // filtro las canciones que cumplen con la condicion de tener el mismo genero que estoy filtrando
  cancionesFiltradas = canciones.filter(function (c) {
    return c.genero === generoAFiltrar;
  })

  // OPCION: esto tambien se resuelve con un for, clasico, sin mas vueltas
  // cancionesFiltradas = [];
  // for (var i = 0; i < canciones.length; i++) {
  //   if (canciones[i].genero === generoAFiltrar) {
  //     cancionesFiltradas.push(canciones[i]);
  //   }
  // }

  // como modifique el array de canciones, tengo que volver a limpiar la tabla y volver a generar
  limpiarTabla();
  // en este caso, a la funcion render le vamos a decir que canciones queremos que muestre
  // para eso, tambien vamos a modificar la funcion render
  render(cancionesFiltradas);
}

// en esta funcion simplemente agrego el evento para el submit del formulario de filtro
function crearFormularioFiltro () {
  let formFiltrarCanciones = $('.form-filtrar-canciones');
  formFiltrarCanciones.on('submit', function (e) {
    e.preventDefault();
    // y cuando se hace el submit del formulario llamo a mi funcion agregarCancion
    filtrarCanciones();
  })

  formFiltrarCanciones.on('reset', function (e) {
    e.preventDefault();
    // en el limpiar, lo que hacemos es borrar lo que tiene el input de filtro, y hacer la busqueda
    $('.form-filtrar-canciones input[name="genero"]').val('');
    // y cuando se hace el submit del formulario llamo a mi funcion agregarCancion
    filtrarCanciones();
  })
}

crearTabla();
crearTablaCancionesEscuchadas();
crearFormularioAgregarCancion();
crearFormularioFiltro();

// subir ejercicio por partes
// subir ejercicio completo
