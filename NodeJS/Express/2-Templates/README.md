# Templates con PUG

Se solía llamar JADE pero le cambiaron el nombre por un tema legal a PUG.

## Primero lo primero - Instalacion

`npm install pug --save` o `npm i -S pug`

## PUG? KESESO

Lo utilizamos en conjunto con Express para devolver HTML "custom" a las peticiones del cliente. <br/>
El HTML que vamos a devolver lo vamos a manipular como plantillas o templates.<br/>

### Ejemplo:

Si queremos devolver un saludo al usuario cuando ingresa al endpoint `/sayhi/:userName` vamos a devolver una plantilla que tome el parámetro `userName` y lo inserte en un parrafo que diga `Hello #{userName}`.
<br/>
En pug para tomar un parametro utilizamos la siguiente notación: `#{nombreDelParametro}`
<br/>
En los ejemplos veremos cómo tomar los parametros del objeto `req` para poder llenar nuestra plantilla y devolversela al usuario. <br/>

## Qué necesitamos para trabajar con pug?

- Views: El directorio donde se encuentran los templates. Create una carpetita `views` en tu proyecto.

- Y tenemos que decirle a `express` que utilice como `view engine` a pug.

Seteo del engine en Express:

```js
// la variable __dirname me devuelve el directorio donde está corriendo mi server
console.log(__dirname)
// seteo en views el path de la carpeta views
app.set("views", path.join(__dirname, "views"));
// path.join(__dirname, "views")); nos devuelve el path de nuestra carpeta views

// le digo a express que el view engine es PUG
// si usamos otro view engine como mustache o EJS tmb se pone aca 
app.set("view engine", "pug"); 
```