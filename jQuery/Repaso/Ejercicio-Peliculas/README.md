Metodos a utilizar en este ejercicio:
- append (jQuery)
- remove (jQuery)
- text (jQuery)
- findIndex (JS)
- splice (JS)
- replace (JS)


Dentro de mi archivo `index.js` definir de forma `global` un array `misPeliculas`, debe estar vacio

Dentro de mi archivo HTML agregar:
* Un input con placeholder Nombre Pelicula
    * Tipo texto
    * ID "inputNombre"
* Un input con placeholder Director
    * Tipo texto
    * ID "inputDirector"
* Un input con placeholder Genero
    * Tipo texto
    * ID "inputGenero"
* Un input con placeholder Rating
    * Tipo number
    * Debe ir de 0 a 10 
    * ID "inputRating"
* Un p vacio
    * ID "error"
* Un boton
    * Texto "Agregar"
* Una tabla 
    * ID "listaPeliculas"

Cuando clickeo en el botón agregar llamar a una funcion agregarPelicula

Dentro de la funcion `agregarPelicula` crear un objeto pelicula con las propiedades `nombre, director, genero y rating`. El valor para dichas propiedades debe ser tomado de los inputs del HTML `( utilizar selectores por ID para recuperar los valores, $("#inputNombre") )`

Dentro de la funcion agregarPelicula, agregar la pelicula al array `(usando push)`

Cuando se agrega una pelicula los input box del html se deben limpiar

Dentro de la funcion `agregarPelicula` llamar a una `funcion` que valide:
* Nombre no puede estar vacio
* Director no puede estar vacio
* Genero no puede estar vacio 
* Genero no puede ser distinto a "Ficcion" o "Drama" o "Comedia"
* Numero ingresado no sea mayor a 10
Si todas las validaciones estan OK entonces agregar la pelicula al array
Caso contrario, mostrar en el tag `p` del HTML con id error que hubo un error

-----------------------------------------------------------------------------

Definir otra funcion que se llame mostrarPeliculas

Dentro de la funcion `mostrarPeliculas` agregar un `for` para iterar el array de peliculas
Mostrar en un `console.log`, dentro del for, cada objeto pelicula. 
Verificar en consola.

Dentro del for usar `jQuery` para crear un table row (`tr`) con la clase `fila` y su `id` debe ser `"fila"+nombrePelicula` => quitarle los espacios al nombre de la pelicula => "filaLoqueelvientosellevo" => usar `replace`


Debajo de la fila que definimos con jQuery, crear 3 table data (td) y asignarle al primer td nombre, al segundo director y al tercero rating
Ejemplo: `"<td>"+ misPeliculas[i].nombre +"</td>"`

Agregarle a la fila los 3 `td` (usar `append`)

Dentro de la funcion `agregarPelicula`, al final de todo, llamar a la funcion `mostrarPeliculas`

-----------------------------------------------------------------------------

Dentro de la funcion `agregarPelicula` modificar el objeto pelicula creado y agregar una propiedad `"vista"` con el valor `false`.

Dentro de la funcion `mostrarPeliculas`, adentro del `for`, ademas de los 3 td, crear con jQuery un boton `"borrar"` y un `checkbox`

Hacer append del boton a la fila y hacer prepend del checkbox a la fila 

Verificar que se muestran bien en el HTML

En la funcion `mostrarPeliculas`, en el boton `borrar`, agregarle un handler (funcion) al evento `click`. Dentro del handler hacer un `console.log` mostrando `"clickeaste el boton"`

Verificar en consola 

En la funcion `mostrarPeliculas`, en el `checkbox`, agregarle un handler (funcion) al evento `click`. Dentro del handler hacer un `console.log` mostrando "marcaste el checkbox"

Verificar en consola 

Cuando clickeamos el boton de `borrar`, hay que borrar la pelicula del array y del HTML
Verificar que en el HTML se borra la pelicula
Verificar con un console log que se borra la pelicula del array 

Cuando clickeamos el checkbox, hay que tachar la pelicula en el HTML y al objeto cambiarle la propiedad vista a true
Buscar la pelicula por `id`
Recuperar el indice del array con `findIndex`
