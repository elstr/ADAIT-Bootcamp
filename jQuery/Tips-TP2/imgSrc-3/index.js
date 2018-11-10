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

// itero sobre cada img encontrada
for (let i = 0; i < imagenes.length; i++) {
  // creo el div contenedor y le agrego la clase .card
  let divCard = $('<div></div>').addClass('card');

  // creo el div de la imagen tapada y le agrego la clase .card-tapada
  let divCardTapada = $('<div></div>').addClass('card-destapada');
  // creo la imagen tapada y le configuro el src de tapada.jpg
  let imgDivCardTapada = $('<img />').attr('src', 'img/tapada.jpg');

  // creo el div de la imagen destapada y le agrego la clase .card-destapada
  let divCardDestapada = $('<div></div>').addClass('card-destapada');
  // creo la imagen destapada y le configuro el src con una de las imagenes del array desordenado
  let imgDivCardDestapada = $('<img />').attr('src', imagenes[i]);

  // agrego la imagen destapada como hija del div .card-destapada
  divCardDestapada.append(imgDivCardDestapada);
  // agrego la imagen tapada como hija del div .card-tapada
  divCardTapada.append(imgDivCardTapada);
  // agrego ambos divs (card-tapada y card-destapada) al div contenedor
  divCard.append(divCardTapada).append(divCardDestapada);

  // agrego el div contendor .card al tablero general con clase .cards
  $('.cards').append(divCard);
}