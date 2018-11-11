En este ejemplo, ya tenemos creada en el HTML toda la estructura de las cartas.

Por ejemplo vamos a tener 12 veces algo como lo siguiente.

```html
<div class="cards">
  <div class="card-tapada">
    <img src="img/tapada.jpg" alt="" srcset="">
  </div>
  <div class="card-destapada">
    <img />
  </div>
</div>
```

Lo que necesitamos hacer es obtener cada una de esas `<img />` y configurarles el atributo `src` que por ahora no lo pusimos. El `src` de cada imagen lo vamos a asignar aleatoriamente de nuestras imágenes.