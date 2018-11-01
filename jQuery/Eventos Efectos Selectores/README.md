# jQuery  
🎉 Selectores, efectos y eventos 🎉

## Qué es jQuery? 🤔

Es una librería de **JavaScript** que facilita la manipulación del DOM, nos permite agregar efectos (show, hide, drag, drop, etc). Como también, de una manera muy fácil, poder realizar peticiones AJAX.
<br/>
El objetivo de jQuery es brindarnos un paquete de herramientas simples y fáciles de usar 💚
<br/>
Todo el poder de jQuery se lo da JS. Si entendiste bien cómo manipular el DOM con vanilla JS vas a entender cómo trabaja jQuery detrás de escena. 

## Cómo agrego jQuery a mi proyecto?
* Mediante una etiqueta script en nuestro HTML haciendo referencia a un link CDN(*).  <br/>
    `<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>`
* Utilizando una versión local. Es decir, debemos descargarla localmente y servirla. <br/>
    `<script src="js/jquery-1.11.0.min.js"></script>`
<br/>
> (*) CDN: Content delivery network o content distribution network.<br/>
Servidores que nos brindan las librerías sin necesidad de tenerlas localmente.
---

## Selectores
### Qué es un selector? 🤔

Por un selector entendemos en jQuery lo mismo que en CSS: una forma elegir un elemento (o varios) entre todos los que tenemos en nuestro documento HTML. <br/>
¿Para qué? Para luego poder aplicar sobre los elementos seleccionados diversas funciones. <br/>
Es decir, jQuery utiliza el poder de los selectores para acceder de una manera rápida y sencilla a un elemento o grupo de elementos del DOM y luego poder aplicar sobre los mismos cualquier animaciones o disparar eventos.

### Qué tipos de selectores hay? 🤔

* Selector de **etiquetas**:
    Simplemente indicamos la etiqueta a la que deseamos referirnos, es decir, la etiqueta que queremos seleccionar. Obtendremos con él todas las etiquetas de la página indicada en el selector. <br/>
    Ejemplo: <br/>
    ```js
        $("h1") // Selecciona todos los encabezados de nivel 1
        $("p") // Selecciona todos los parrafos
    ```
* Selector por **identificador**:
    Sirven para seleccionar elementos que tengan un ID definido.
    Para utilizar este selector se indica primero el carácter **"#"** y el nombre del ID.
    Ejemplo: <br/>
    ```js 
        $("#idDelElemento") // Selecciona un elemento que tiene el atributo id="idDelElemento"    
    ```    
* Selector por **clase** (clase CSS):
    Podemos indicar el nombre de una clase y seleccionar todos los elementos a los que se ha aplicado esta clase. Para ello, como en CSS, comenzamos colocando el carácter "." y luego el nombre de la clase que deseamos seleccionar.
     Ejemplo: <br/>
    ```js 
        $(".miClase") //selecciona todos los elementos que tienen el atributo class="miClase"
    ```
* Selector por **varias clases**:
    Si lo deseamos, podemos indicar varias clases CSS, para obtener todos los elementos que tienen esas clases aplicadas: todas al mismo tiempo. Esto se consigue comenzando por un ".", igual que los selectores de clases, y luego otro "." para separar las distintas clases que queremos utilizar en el selector.
    Ejemplo: <br/>
    ```js 
        $(".clase1.clase2") //selecciona los elementos que tienen class="clase1 clase2"
    ```
* Selector asterisco **"*"**:
    Nos sirve para seleccionar **todos** los elementos de la página.
    Ejemplo: <br/>
    ```js 
        $("*") //selecciona todos los elementos que tiene la página
    ```        
* Concatenar varios selectores distintos:
    Utilizar varios selectores para obtener todas las etiquetas que cumplen uno de ellos. No hace falta que cumplan todos los selectores a la vez, con uno alcanza. Para ello colocamos todos los selectores que deseamos, separados por una coma **","**.
     Ejemplo: <br/>
    ```js 
        $("div,p") //selecciona todos los elementos división y párrafo 
        $(".clase1,.clase2") //selecciona los elementos que tienen la clase "clase1" O "clase2" 
        $("#miId,.miClase,ul") //selecciona el elemento con id="miId", los elementos con class="miClase" y todas las listas UL
    ```
---

## Eventos
### Qué es un evento? 🤔
Una página puede responder a las acciones que los usuarios realizan. A éstas acciones las llamamos eventos. <br/>
Un evento representa el preciso momento cuando "algo" sucedió.<br/>
    Ejemplos:
        Mover el mouse sobre un elemento
        Seleccionar un radio button
        Clickear un elemento
Cuando clickeamos un botón decimos que se **disparó** el evento click.
<br/>
Eventos del DOM:

| Mouse Events | Keyboard Events | Form Events | Document/Window Events |
| ------------ | --------------- | ----------- | ---------------------- |
| click  | keypress | submit | load |
| dblclick  | keydown | change | resize |
| mouseenter  | keyup | focus | scroll |
| mouseleave  |  | blur | unload |

### Ejemplos

```js
$("p").dblclick(function(){
    $(this).hide();
});
```
```js
$("#p1").mouseenter(function(){
    alert("Entraste al parrafo!");
});
```
```js
$("#p1").mouseleave(function(){
    alert("Saliste del parrafo!");
});
```
##### Puedo dinámicamente cambiar o agregar propiedades de css 🧙‍
```js
$("input").focus(function(){
    $(this).css("background-color", "#cccccc");
});
```

##### El método on() agrega eventHandlers facilmente 
```js
$("p").on("click", function(){
    $(this).hide();
});
```
---
## Efectos
YASSSS Acá se pone!!!! <br/>
 > Hide, Show, Toggle, Slide, Fade, Animate 

### Ejemplo Show/Hide
Sintáxis: `$(selector).hide(speed,callback);` `$(selector).show(speed,callback);`   
    **speed** Especifíca que tan rápido debe ocultarse o mostrarse el elemento.
    Podemos usar valoreas como `slow`, `fast` o directamente milisegundos.
    **callback** Es la funcion que se va a ejecutar inmediatamente después de ocultar o mostrar el elemento.

```js
$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
```

```js
$("button").click(function(){
    $("p").hide(1000);
});
```

### Ejemplo Toggle
Con toggle podemos alternar entre `hide()` y `show()`.  
Sintáxis: `$(selector).toggle(speed,callback);`  

```js
$("button").click(function(){
    $("p").toggle();
});
```

## FADE
### fadeIn
Sintáxis: `$(selector).fadeIn(speed,callback);`  

```js
$("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});
```
### fadeOut
Sintáxis: `$(selector).fadeOut(speed,callback);`  

```js
$("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
});
```

### fadeToggle
Sintáxis: `$(selector).fadeToggle(speed,callback);`  

```js
$("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
});
```

### fadeTo
Sintáxis: `$(selector).fadeTo(speed,opacity,callback);`  
```js
$("button").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
});
```

## SLIDE
### slideDown
Sintáxis: `$(selector).slideDown(speed,callback);`  

```js
<div id="flip">Click to slide down panel</div>
<div id="panel">Hello world!</div>

$("#flip").click(function(){
    $("#panel").slideDown();
});
```
### slideUp
Sintáxis: `$(selector).slideUp(speed,callback);`  

```js
<div id="flip">Click to slide up panel</div>
<div id="panel">Hello world!</div>

$("#flip").click(function(){
    $("#panel").slideUp();
});
```
### slideToggle
Sintáxis: `$(selector).slideToggle(speed,callback);`  

```js
<div id="flip">Click to slide toggle panel</div>
<div id="panel">Hello world!</div>

$("#flip").click(function(){
    $("#panel").slideToggle();
});
```

### Se pueden encadenar efectos? 🤔

Ziiiiiiii 😱

```js
$("#p1")
  .css("color", "red")
  .slideUp(2000)
  .slideDown(2000);
```
<br/>
## Animate 
Sintáxis: `$(selector).animate({params},speed,callback);`

⚠️ Importante: Por default todos los elementos HTML están en posición `static`. ⚠️  <br/>
Para poder animarlos necesito cambiar su propiedad CSS `position` posición CSS a `relative`, `fixed`, o `absolute` 
<br/>

### Ejemplos:  

```js
<div style="position:absolute;" />
$("button").click(function(){
    $("div").animate({left: '250px'});
}); 
```  

Es posible manipular **múltiples** propiedades. Las propiedades se escriben con notación **camelCase**  <br/>  

```js
<div style="position:absolute;" />
$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
        marginRight: '10px',
    });
}); 
```  

### Valores relativos?
Valores relativos al valor actual del elemento. 
Utilizo `+=`

```js
<div style="position:absolute;" />
$("button").click(function(){
    $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
}); 
```

### Combinar toggle, hide o show
```js
<div style="position:absolute;" />
$("button").click(function(){
    $("div").animate({
        height: 'toggle'
    });
}); 
```

### Cómo cortar una animación? STOP 🛑

```js
$("#stop").click(function(){
    $("#panel").stop();
});
```


