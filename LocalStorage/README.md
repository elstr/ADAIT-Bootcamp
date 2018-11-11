# localStorage y sessionStorage

Son parte de HTML5 y nos permiten guardar información del lado del cliente (en nuestro navegador). <br/>

## Qué diferencia hay entre ambos?

### localStorage

Guarda información que permanecerá almacenada por tiempo indefinido en el navegador sin importar que lo cerremos.

### sessionStorage

Almacena los datos de una sesión y éstos se eliminan cuando el navegador se cierra.

## Ventajas?

- Menos peticiones a un servidor reduciendo tráfico de red.
- Si se corta la red no pierdo información.

## Cómo los utilizamos?

### Guardar valores

Con el método `setItem` podemos guardar información en el storage. <br/>

```js
localStorage.setItem("nombreIdentificador", "valor");
sessionStorage.setItem("nombreIdentificador", "valor");
```

Cómo hago para ver en un `console.log` si se guardó?
```js
  console.log(localStorage["nombreIdentificador"]);
```

### Recuperar valores de localStorage

Con el método `getItem` podemos recuperar información en el storage. <br/>

```js
localStorage.getItem("nombreIdentificador");
sessionStorage.getItem("nombreIdentificador");
```

## Cómo puedo guardar un objeto en local storage? 

Los objetos primero deben convertirse a formato JSON con **stringify** y luego utilizamos `setItem`

