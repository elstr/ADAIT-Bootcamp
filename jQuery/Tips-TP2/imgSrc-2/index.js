// creo un array con todas las imagenes que quiero mostrar
const imagenes = [
  'img/alce.jpg',
  'img/epelante.jpg',
  'img/alce.jpg',
  'img/epelante.jpg',
];

// desordeno el array
// esta función está creada en un archivo JS separado que inclui en el index.html
// src: https://file-epraavbxik.now.sh
imagenes.shuffle();

// voy a buscar con jquery todos los elementos div con la clase .card
var todosLosDivCard = $('.card');

// itero sobre cada img encontrada
for (let i = 0; i < todosLosDivCard.length; i++) {
  // creo el div contenedor y le agrego la clase .card-destapada
  let divCardDestapada = $('<div></div>').addClass('card-destapada');
  // creo la imagen y le configuro el src con una de las imagenes del array desordenado
  let imgDivCardDestapada = $('<img />').attr('src', imagenes[i]);
  // agrego la imagen como hija del div .card-destapada
  divCardDestapada.append(imgDivCardDestapada);

  // a cada div le voy a agregar como hijo el div .card-destapada
  // ACLARACION: si bien jquery me devuelvo un "array" cuando le pido todos los elementos
  // no es un array propiamente dicho de js, sino que es una lista de elementos de jquery
  // para acceder a cada uno de los elementos por su posicion/indice, tenemos que usar el metodo eq()
  // https://api.jquery.com/eq/
  // https://www.w3schools.com/jquery/traversing_eq.asp
  todosLosDivCard.eq(i).append(divCardDestapada);
}