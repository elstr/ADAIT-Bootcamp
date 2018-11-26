var misPeliculas = [];

function agregarPelicula() {
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
  // validarPelicula()
  misPeliculas.push(pelicula);
  mostrarPeliculas();
}

function mostrarPeliculas() {
  var listaPeliculas = $("#listaPeliculas");
  for (let i = 0; i < misPeliculas.length; i++) {
    var fila = $('<tr class="fila"></tr>');

    var idFila = "fila" + misPeliculas[i].nombre.replace(" ", "");
    fila.attr("id", idFila);

    var tdNombre = "<td>" + misPeliculas[i].nombre + "</td>";
    var tdDirector = "<td>" + misPeliculas[i].director + "</td>";
    var tdRating = "<td>" + misPeliculas[i].rating + "</td>";

    var botonBorrar = $("<button>Borrar</button>");
    botonBorrar.on("click", function() {
      borrarPelicula(misPeliculas[i]);
    });
    var checkbox = $('<input type="checkbox" />');
    checkbox.on("click", function() {
      marcarPelicula(misPeliculas[i]);
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
  // validar
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
