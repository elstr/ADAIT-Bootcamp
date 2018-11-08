var misPeliculas = [];

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

    var tdNombre = "<td>" + misPeliculas[i].nombre + "</td>";
    var tdDirector = "<td>" + misPeliculas[i].director + "</td>";
    var tdRating = "<td>" + misPeliculas[i].rating + "</td>";

    var botonBorrar = $("<button>Borrar</button>");
    botonBorrar.on("click", function() {
      console.log("clickeaste el boton borrar");
      console.log("pelicula a borrar:", misPeliculas[i]);
      // borrarPelicula(misPeliculas[i]);
    });
    var checkbox = $('<input type="checkbox" />');
    checkbox.on("click", function() {
      console.log("clickeaste el checkbox");
      console.log("pelicula a marcar:", misPeliculas[i]);
      // marcarPelicula(misPeliculas[i]);
    });

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

function borrarPelicula(pelicula) {
  var indice = misPeliculas.findIndex(p => p.nombre === pelicula.nombre);
  misPeliculas.splice(indice, 1);
  mostrarPeliculas();
}
function marcarPelicula(pelicula) {
  pelicula.vista = true;
  idFila = "#fila" + pelicula.nombre.replace(" ", "");
  $(idFila).css("text-decoration", "line-through");
}
