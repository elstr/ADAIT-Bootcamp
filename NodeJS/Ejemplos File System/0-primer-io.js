// MI PRIMER I/O!

// Escribe un programa que, usando una llamada síncrona al sistema de
// archivos, lea un archivo recibido por argumento e imprima a consola la
// cantidad de saltos de línea ('\n') que contiene.

// El programa recibirá la ruta al archivo como único argumento.

//  ─────────────────────────────────────────────────────────────────────────────

//  ## PISTAS

//   Para resolver este ejercicio usaremos el módulo fs del núcleo de Node.
//   Para cargar dicho módulo o cualquier módulo es necesario hacer:

//      var fs = require('fs')

//   De este modo, el módulo fs estará disponible en esa variable.

//   Toda operación síncrona (o de bloqueo) del sistema de archivos en el
//   módulo fs tiene sufijo 'Sync'. Para leer un archivo debes usar
//   fs.readFileSync('/path/to/file'). Éste devuelve un objeto Buffer con los
//   contenidos del archivo.

//   Los objetos Buffer se pueden convertir en String usando el método
//   toString() por ejemplo: var str = buf.toString().

//   Si buscas una forma sencilla de contar el número de saltos de línea en un
//   string, piensa que puedes convertir un String de Javascript en un array de
//   substrings usando .split(), y que puedes usar '\n' como delimitador.


//   Como ya hablamos cuando necesito hacer un require significa
//   que previamente tengo que instalar un modulo
var fs = require('fs')
const buf = fs.readFileSync('/Users/elester/Desktop/ADAIT/Clases Subidas - Github/NodeJS/Ejemplos/test-file.txt')
const str = buf.toString()
console.log(str.split('\n'))


