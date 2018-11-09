const misPeliculas = [];

function agregarPelicula() {
  console.log("agregarPelicula");

  var nombre = $("#inputNombre").val();
  var director = $("#inputDirector").val();
  var rating = $("#inputRating").val();
  var genero = $("#inputGenero").val();

  const pelicula = {
    nombre: nombre,
    director: director,
    genero: genero,
    rating: rating
  };

  var esValido = validarPelicula();
  if (esValido) {
    misPeliculas.push(pelicula);
  }

  mostrarPeliculas();
}

function mostrarPeliculas() {
  var listaPeliculas = $("#listaPeliculas");
  for (let i = 0; i < misPeliculas.length; i++) {
    // defino un tr con jquery para despues poder hacerle append
    var fila = $('<tr class="fila"></tr>');

    // Armo el ID de la pelicula filaLoqueelvientosellevo
    // Replace va a tomar los espacios (primer parametro) y reemplazarlos por vacio (segundo parametro)
    // replace(queReemplazo, conQueReemplazo)
    var idFila = "fila" + misPeliculas[i].nombre.replace(" ", "");
    // attr es un metodo de jquery que me permite agregarles atributos a los nodos
    fila.attr("id", idFila);
    // data es un metodo de jquery para agregar información adicional al elemento
    // en este caso, estoy agregando la informacion del nombre de la pelicula
    // https://www.w3schools.com/jquery/misc_data.asp
    // https://api.jquery.com/data/
    fila.data('nombre-pelicula', misPeliculas[i].nombre);

    // creo cada una de las <td> que vamos a mostrar
    var tdNombre = "<td>" + misPeliculas[i].nombre + "</td>";
    var tdDirector = "<td>" + misPeliculas[i].director + "</td>";
    var tdRating = "<td>" + misPeliculas[i].rating + "</td>";

    // creamos el boton borrar, y vamos a agregar el evento onclick por afuera de esta funcion
    var botonBorrar = $("<button>Borrar</button>");
    // creamos el check para tachar una peli, y agregamos el evento al final
    var checkbox = $('<input type="checkbox" />');

    fila.append(tdNombre);
    fila.append(tdDirector);
    fila.append(tdRating);
    fila.append(botonBorrar);
    fila.prepend(checkbox);
  }
  listaPeliculas.append(fila);
}

function validarPelicula() {
  console.log("validarPelicula");
  var nombre = $("#inputNombre").val();
  var director = $("#inputDirector").val();
  var rating = $("#inputRating").val();
  var genero = $("#inputGenero").val();
  if (
    nombre === "" ||
    director === "" ||
    rating === "" ||
    genero === "" ||
    rating > 10 ||
    (genero !== "Drama" && genero !== "Comedia" && genero !== "Ficcion")
  ) {
    // mostrar mensaje de error en HTML
    return false;
  }
  return true;
}

// agregamos el evento click a todos los elementos <input type="checkbox"> que sean hijos de un elemento con la clase `fila`
$(document).on('click', '.fila input[type="checkbox"]', function () {
  console.log("clickeaste el checkbox");
  // obtenemos el parent del boton, que es la fila
  var laFeela = $(this).parent();
  // a la fila le agregamos/sacamos la clase tachada con el metodo de jquery toggleClass
  // http://api.jquery.com/toggleclass/
  // https://www.w3schools.com/jquery/html_toggleclass.asp
  laFeela.toggleClass('tachada');
})

// agregamos el evento click a todos los elementos <button> que sean hijos de un elemento con la clase `fila`
$(document).on('click', '.fila button', function() {
  console.log("clickeaste el boton borrar");
  // obtenemos el parent del boton, que es la fila
  var laFeela = $(this).parent();
  // con el metodo de jquery data() podemos obtener la informacion que guardamos mas arriba en la propiedad `nombre`
  var nombreDeLaPelicula = laFeela.data('nombre-pelicula');
  // en la propiedad habiamos guardado el nombre de la pelicula, por lo que podemos buscarla con findIndex
  var laPosicionDeLaPelicula = misPeliculas.findIndex(p => p.nombre === nombreDeLaPelicula);
  // una vez que obtuvimos el indice de la pelicula, podemos eliminarla del array
  console.log("pelicula a borrar: ", misPeliculas[laPosicionDeLaPelicula]);
  // elimino la fila del docuemtno
  laFeela.remove();
  // elimino la file del array
  misPeliculas.splice(laPosicionDeLaPelicula, 1);
  // muestro el array para verificar que se elimino bien la peli
  console.log(misPeliculas);
})