// 1. CREAR EL HTML CON EL CONTENEDOR VACIO
// 2. CREAR EL JS
// 3. EN EL JS, VAMOS A CREAR EL ARRAY DE LO NUMEROS QUE QUEREMOS USAR
// 4. POR CADA UNO DE LOS NUMEROS EN EL ARRAY, CREAMOS UN DIV EN EL HTML QUE CONTENGA ESE NUMERO. ESTE NUMERO, EN UN PRINCIPIO, VA A ESTAR OCULTO AL USUARIO
// 5. A CADA DIV CREADO AGREGAMOS LA FUNCION PAL CLICK DONDE:
//   5.1 VAMOS A HACER QUE EL NUMERO SE MUESTRE
//   5.2 CONTAMOS UN CLICK MAS
//   5.3 SI EL NUMERO CLICKEADO ES EL 1, ENTONCES LE DECIMOS A LA PERSONA QUE GANO Y LA CANTIDAD DE CLICKS

// creo un array con los numeros que quiero usar para el juego
var numeros = [
  { numero: 1 }, { numero: 2 },
  { numero: 3 }, { numero: 4 },
  { numero: 5 }, { numero: 6 },
  { numero: 7 }, { numero: 8 },
  { numero: 9 }, { numero: 10 },
  { numero: 11 }, { numero: 12 },
  { numero: 13 }, { numero: 14 },
  { numero: 15 }, { numero: 16 },
  { numero: 17 }, { numero: 18 },
  { numero: 19 }, { numero: 20 },
  { numero: 21 }, { numero: 22 },
  { numero: 23 }, { numero: 24 }
];
// creo la variable que voy a utilizar como contadora de los clicks
var clicks = 0;

// ordeno, de forma aleatoria, todos los elementos del array
numeros = numeros.sort(function (a, b) {
  // como la funcion del sort no tiene ningun criterio logico, js va a terminar moviendo los elementos al azar
  // dependiendo de si la funcion retorna un numero negativo, positivo o cero
  // Math.random() es una funcion que ya existe en JS y nos devuelve un numero entre 0 y 1
  // al restarle 0.5 a lo que me devuelve Math.random(), hago que el numero este entre -0.5 y 0.5
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
  // https://www.w3schools.com/js/js_random.asp
  return Math.random() - 0.5
});

function crearJuego () {
  // obtengo el tablero donde voy a agregar todos los numeros
  var container = $('.tablero');

  for (let i = 0; i < numeros.length; i++) {
    let elNumero = numeros[i].numero;

    // creo el span que va a tener el numero, y originalmente no se va a ver hasta que hagamos click
    var nuevoSpan = $('<span></span>').text(elNumero);
    // creo el div, con la clase numero, que contiene al span anteriormente creado
    var nuevoDiv = $('<div class="numero"></div>').append(nuevoSpan);

    // agrego el nuevo div al contenedor principal
    container.append(nuevoDiv);

    // al nuevo div, le agrego el evento click para:
    nuevoDiv.on('click', function () {
      // 1. incremente el contador de clicks
      $(this).addClass('mostrar');
      // 2. agregar la clase 'mostrar' (que hace que el span empiece a verse)
      clicks++;
      // 3. verificar que si el numero que apretamos es el 1, muestre el cartel de ganador
      if (elNumero === 1) {
        alert('¡Ganaste en ' + clicks + ' clicks!');
      }
    })
  }
}

$(document).ready(crearJuego);