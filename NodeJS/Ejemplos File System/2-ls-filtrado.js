// ## LS FILTRADO

//   Crea un programa que dado un directorio imprima una lista de archivos
//   filtrados por la extensión. 
//   Para un directorio cualquiera que vos elijas, deberás recorrerlo
//   y devolver el nombre de los archivos que sean de la extensión que le pases 
//   a la función.

//  ─────────────────────────────────────────────────────────────────────────────

//  ## PISTAS

//   La función fs.readdir() recibe como parámetros: una ruta(path) y un
//   callback. La firma del callback es:

//      function callback (error, lista) { /* ... */ }

//   La lista es un array de nombres de archivos de tipo String.

//   Además, el módulo path puede resultar útil, especialmente la función
//   extname.
//   var path = require('path')
//   const extension = path.extname(lista[i])
//   if (extension === '.txt') console.log(lista[i])

var fs = require('fs')
var path = require('path')

function filtrar(folder, ext){
    fs.readdir(folder, function (err, archivos) {
        if (err) return console.error(err)
        for(let i=0; i<archivos.length; i++){
            const archivo = archivos[i]
            if (path.extname(archivo) === ext) {
                console.log(archivo)
            }
        }
    })
}

filtrar('/Users/elester/Desktop', '.js')