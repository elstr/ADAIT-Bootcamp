En este ejemplo, ya tenemos creada en el HTML casi toda la estructura de las cartas.

En el HTML vamos a tener solo el contenedor donde voy a crear las 12 cartas.

```html
<div class="cards"></div>
```

Lo que necesitamos hacer es crear cada uno de los divs con la clase `.card` y agregarlo en el tablero general con clase `.cards`.
Elemento a crear:
```html
<div class="card">
  <div class="card-tapada">
    <img src="img/tapada.jpg" alt="" srcset="">
  </div>
  <div class="card-destapada">
    <img />
  </div>
</div>
```

A la imagen dentro de este div que creamos tenemos que configurarle el atributo `src` que por ahora no lo pusimos. El `src` de cada imagen lo vamos a asignar aleatoriamente de nuestras imágenes.