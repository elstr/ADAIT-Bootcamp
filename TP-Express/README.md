# TP Node/Express

_Fecha de entrega: **Viernes 21 de diciembre**_

### Enunciado

Se debe crear una aplicación cliente / servidor, __con Express__, con los siguientes requerimientos:

1. Atienda a la ruta `/estaspensandolomismoqueyobananin` y devuelva la frase `claro que si bananon`
2.  Al ingresar a la ruta `/users/new` renderice un formulario con los siguientes datos y un botón de guardar:
    * Nombre (Máximo 30 carácteres)
    * Apellido (Máximo 30 carácteres)
    * Telefono (Solo números)
    * Email (Validar el formato utilizando expresiones regulares)

    Al hacer click en el botón guardar, primero se debe validar que los campos sean válidos. En caso afirmativo, hacer un POST a la ruta `/api/users`. En la ruta (en el lado del servidor) se deberán validar los datos nuevamente y guardarlos en un archivos local `users.json`
3. Al ingresar a la ruta `/users` renderizar un listado con los datos que pedimos en el paso anterior. Los datos a mostrar en el listado se deben obtener haciendo un GET a la ruta `/api/users`. En esta ruta (en el servidor) es donde se obtendrán los datos del archivo `users.json`, y devolverá el array de los usuarios guardados.
4. El listado de los usuarios debe poder filtrarse. El filtro funciona de la siguiente manera:
    * Se tendrá un solo input text y un botón filtrar
    * Cuando escribimos algo en el input y clickeamos el botón filtrar, tenemos que hacer un GET a la ruta `/api/users` pasando un queryParam `search` con el valor ingresado en el input.
    * En la ruta (en el servidor), con el queryParam `search` que nos llega, vamos a obtener todas los users guardados en `users.json` y filtramos los objetos en los que el nombre, apellido, telefono o email coincidan con el texto ingresado en search. Finalmente, devolveremos al cliente el listado resultante.

      *Ejemplo:*
      ```js
      // Tenemos el siguiente array de users
      [{
        nombre: 'Ada',
        apellido: 'Lovelace',
        telefono: '1234567890',
        email: 'contacto@gmail.com'
      }, {
        nombre: 'Grace',
        apellido: 'Hopper',
        telefono: '087654321',
        email: 'contacto@hotmail.com'
      }]
      ```
      Si ingresamos en el input la palabra `ada`, el listado resultante va a contener un solo elemento (user Ada Lovelace).

      Si ingresamos la palabra `contacto`, el listado resultante va a tener 2 elementos, ya que cada user tiene en el email la palabra buscada.
    * Una vez que obtuvimos el array, volvemos a renderizar la tabla de users.
5. Cada elemento en la tabla contará la acción eliminar. Al hacer click en eliminar, se debe hacer un DELETE a la ruta `/api/users/:id`. En la ruta (el servidor) vamos a eliminar el registro del archivo `users.js`. Una vez eliminado del servidor, eliminamos la línea de nuestra web.
5. Cada elemento en la tabla contará la acción editar. Al hacer click en editar, se redireccionará a `/users/edit?id=[ID_USUARIO]`, en donde se va a renderizar un formulario con los datos pre-cargados. Los datos se deben obtener haciendo un GET a la ruta `/api/users/:id`. Al finalizar la edición, y hacer click en el botón editar, haremos un PUT a la ruta `/api/users/:id`. En la ruta (en el servidor), tenemos que buscar el elemento en el array guardado en `users.js`, y guardar la nueva información. Una vez guardado en el servidor, volvemos a la página del listado.
