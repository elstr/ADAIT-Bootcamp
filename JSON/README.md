# JSON

JSON o JavaScript Object Notation es un formato ligero para almacenar o transportar data. <br/>
A nivel sintáctico es muy parecido a un objeto de javascript pero se wrappea en un **string**  y todos su pares **clave:valor** también se wrappean en string<br/>

## Qué diferencias hay con un objeto javascript entonces?

- JSON es un formato de datos que contiene sólo propiedades, no métodos.
- JSON requiere usar comillas dobles para los valores y los nombres de propiedades.
- Las comillas simples no son válidas.
  <br/>
- JSON data se wrappea entre `{}` o `[]`
- JSON data se escribe como pares `nombre:valor`
- JSON data se separa con comas

```js
// --------------------------------------------------------
// Así declaramos un objeto básico en Javascript
// --------------------------------------------------------
let objeto = { 
    nombre:"Ada",
    owners:["Celeste","Ezequiel"],
    profesores:["Juan","Lele"],
    ayudantes:{nombre:"Stefania",apellido:"La Uno"}
};
// --------------------------------------------------------
// Mismo objeto pero JSON
// --------------------------------------------------------
const objetoJson = `
    {
        "nombre":"Ada",
        "owners":["Celeste","Ezequiel"],
        "profesores":["Juan","Lele"],
        "ayudantes":{"nombre":"Stefania","apellido":"La Uno"}
    }`;
console.log(objetoJson);
// --------------------------------------------------------
// Así declaramos un array JSON conteniendo muchos objetos
// --------------------------------------------------------
const arrayJson = `[
  { "id": "1", "nombre": "coca cola"},
  { "id": "3", "nombre": "fanta"},
  { "id": "5", "nombre": "manaos"}
]`;
console.log(arrayJson);

```

## Valores posibles

En JSON podemos utilizar alguno de los siguientes tipos: 
* String
* Numero
* Objeto
* Array
* Booleano
* Null


JSON es más restrictivo que javascript. 
* Todos los valores `strings` deben ir entre comillas dobles 
* Las comillas simples no están permitidas 
* No hay ningún tipo de comentario en un JSON 
* No se admiten valores `undefined`

## Intercambiando Data

> Cuando intercambiamos data entre navegador y servidor, la data **solo** puede ser texto.  

JSON es texto y podemos convertir objetos de JavaScript en JSON y ese JSON enviarlo al servidor. <br/>
Y viseversa, podemos convertir JSON que recibimos del servidor a objetos JavaScript <br/>

### Enviando información
👉 Copiar y pegar el siguiente ejemplo en la consola de nuestro navegador <br/>
#### STRINGIFY

Para enviar información en formato JSON podemos utilizar **STRINGIFY** para convertir nuestra estructura. <br/>

```js
var usuarioActivo = { usuario: "elstr", age: 30, city: "caba" };
console.log("Usuario Activo", usuarioActivo)
var usuarioJSON = JSON.stringify(usuarioActivo);
console.log("Usuario convertido a JSON", usuarioJSON)
```

### Convertir JSON a lo que era ?
#### PARSE
Supongamos que hemos convertido un objeto a JSON porque necesitamos enviarlo al servidor y el servidor nos responde devolviendonos el objeto en formato JSON. <br/>
Cómo convierto un JSON a un objeto javascript? Utilizamos **PARSE**

```js
// Supongamos que recibimos el usuario previamente definido
var usuarioActivo = { usuario: "elstr", age: 30, city: "caba" };
console.log("Usuario Activo", usuarioActivo)
var usuarioJSON = JSON.stringify(usuarioActivo);
console.log("Usuario convertido a JSON", usuarioJSON)
var usuarioParsed = JSON.parse(usuarioJSON);
console.log("Usuario convertido de JSON a objeto javascript", usuarioParsed)
usuarioParsed.telefonos = [{area: 54911, numero: 40395233}]
console.log("Usuario modificado", usuarioParsed)
```
