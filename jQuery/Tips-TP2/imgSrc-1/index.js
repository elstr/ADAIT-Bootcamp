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

// voy a buscar con jquery todos los elementos img que estan dentro de los div con la clase .card-destapada
var lasImgDeLosDivCardDestapada = $('.card .card-destapada img');

// itero sobre cada img encontrada
for (let i = 0; i < lasImgDeLosDivCardDestapada.length; i++) {
  // a cada img le voy a modificar el atributo src usando la funcion de jquery attr
  // ACLARACION: si bien jquery me devuelvo un "array" cuando le pido todos los elementos
  // no es un array propiamente dicho de js, sino que es una lista de elementos de jquery
  // para acceder a cada uno de los elementos por su posicion/indice, tenemos que usar el metodo eq()
  // https://api.jquery.com/eq/
  // https://www.w3schools.com/jquery/traversing_eq.asp
  lasImgDeLosDivCardDestapada.eq(i).attr('src', imagenes[i]);
}