// //   Crear una funcion que agregue objetos peliculas
// // 	•	El objeto pelicula Debera tener ID, titulo, descripcion,
// //       año, duracion, actores, director
// // 	•	Debera tener metodos para editar todas sus propiedades,
// //       menos su ID, y para los actores tendra que ir agregando uno a uno

// //   Crear un array de peliculas
// // 	•	Crear una funcion que agregue una pelicula al
// //       array de peliculas
// // 	•	La pelicula debera tener un ID y un Titulo
// // 	•	Crear una funcion que evalue antes de agregar que
// //       la pelicula no fue ingresada previamente
// // 	•	Crear una funcion que ordene las peliculas por Titulo

// En algún lugar necesito guardar todas las películas que voy agregando.
// puedo utilizar un array definiéndolo como vacío y después ir llenándolo.
var blockbuster = [];

// ------------------------------------------------------------------------------------------
// -- Cómo sé si ya existe la película? La tengo que buscar. Cómo? FIND nos puede ayudar ----
// ------------------------------------------------------------------------------------------
function agregarPelicula(peliculaQueRecibo) {
  // Usamos find para ver si la pelicula ya existe
  const resultado = blockbuster.find(
    pelicula => pelicula.id === peliculaQueRecibo.id
  );
  // if(resultado === undefined){
  //   // Agrego la pelicula
  //   blockbuster.push(peliculaQueRecibo)
  // }
  // Esta linea hace lo mismo que el if de arriba, pero es un poco más cheto
  // Si resultado es undefined significa que la película no existe y pusheamos al array
  resultado === undefined && blockbuster.push(peliculaQueRecibo);
  console.log("Peliculas", blockbuster);
}
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

var pelicula1 = {
  id: 1,
  titulo: "Loco por mery",
  tipo: "Comedia",
  editarTitulo: function(tituloNuevo) {
    this.titulo = tituloNuevo;
  }
  // Si quiero editar TODAS las props tengo que recibirlas TODAS..
  // editarPropiedades: function(tituloNuevo, tipoNuevo){
  //   this.titulo = tituloNuevo
  //   this.tipo = tipoNuevo
  // }
};

// ------------------------------------------------------------------------------------------
// ------------- Usando Class ---------------------------------------------------------------
// ------------------------------------------------------------------------------------------
class Peliculas {
  constructor(tipo, titulo, id, actores) {
    this.tipo = tipo;
    this.titulo = titulo;
    this.id = id;
    this.actores = actores;
  }
  editarTipo(tipoNuevo) {
    this.tipo = tipoNuevo;
  }
  editarTitulo(tituloNuevo) {
    this.titulo = tituloNuevo;
  }
  agregarActor(actor) {
    this.actores.push(actor);
  }
  ordenarPorTitulo() {}
}
var misActores = ["jorge", "ricardo", "ruben"];
// Cómo instancio una película?  nombreObjeto = new ClaseDeLaCualInstancio
var miPelicula = new Peliculas(
  "drama",
  "lo que el viento se LLORO",
  1,
  misActores // puedo pasarle un array de actores al constructor? ZIIIII :gritito faraona:
);

miPelicula.editarTitulo("comedia");
// También podría tener una función dentro de la clase que agregue actores uno a uno
miPeliculas.agregarActor("Juan Carlos Calabro");

// ------------------------------------------------------------------------------------------
// ------------- Sin usar Class -------------------------------------------------------------
// ------------------------------------------------------------------------------------------

var peliculas = [];

function agregarPelicula(pelicula) {
  // 0) validar si la pelicula no fue ingresada
  const existe = peliculas.find(p => p.titulo === pelicula.titulo);
  if (existe) {
    console.log("Ya ingresaste la película");
  } else {
    peliculas.push(pelicula);
    console.log(peliculas);
  }
}

var peli1 = {
  id: 1,
  titulo: "matrix 1"
};
var peli2 = {
  id: 2,
  titulo: "matrix 1"
};
var peli3 = {
  id: 3,
  titulo: "aladin"
};
var peli4 = {
  id: 4,
  titulo: "aladin"
};
var peli5 = {
  id: 5,
  titulo: "aladin2"
};
var peli6 = {
  id: 6,
  titulo: "los locos adams"
};
var peli7 = {
  id: 7,
  titulo: "loco por mery"
};

agregarPelicula(peli1);
agregarPelicula(peli2);
agregarPelicula(peli3);
agregarPelicula(peli4);
agregarPelicula(peli5);
agregarPelicula(peli6);
agregarPelicula(peli7);

// ------------------------------------------------------------------------------------------
// ------------- Cómo ordenar un array? SORT ------------------------------------------------
// ------------------------------------------------------------------------------------------
// 1) Definir un criterio de ordenamiento => Una función
// Por definición ésta función va a recibir dos parametros (SORT se encargará de pasárselos)
function ordenarPorTitulo(peli1, peli2) {
  // Defino el criterio de orden
  if (peli1.titulo < peli2.titulo) return -1;
  if (peli1.titulo > peli2.titulo) return 1;
  // Si son iguales devuelvo 0
  return 0;
}

// 2) Llamar a SORT sobre el array que queremos ordenar
// El método sort RECIBE el criterio de ordenamiento => el criterio es una FUNCION
peliculas.sort(ordenarPorTitulo); // El array de películas lo tenemos definido más arriba (línea 91)
console.log(peliculas);
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// ------------- Cómo borrar una pelicula del array?  ---------------------------------------
// ------------------------------------------------------------------------------------------

// Lo interesante de tener que borrar una película es que la película está dentro de un array
// Utilizaremos dos métodos de arrays para resolver esto
// 1) indexOf: Este método me devuelve el INDICE o POSICION donde se encuentra aquello que
//    estamos buscando en nuestro array.
//    Cómo se usa? array.indexOf(pelicula)

// 2) splice: Este método BORRA del array una cantidad de elementos que yo defino partiendo de
//    el índice que yo defino.
//    Cómo se usa? array.splice(desdeQueIndiceQuieroBorrar, cuantosElementosQuieroBorrar)
//    peliculas.splice(3,5) => Desde la posición 3 inclusive borrar 5 elementos.

function borrarPelicula(pelicula) {
  // 0) Necesito saber el indice de la pelicula en el array
  const indice = peliculas.indexOf(pelicula);
  console.log("Indice a borrar:", indice);
  // 1) Borro esa posicion del array
  peliculas.splice(indice, 1);
}
borrarPelicula(peli1);
console.log(peliculas);
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
