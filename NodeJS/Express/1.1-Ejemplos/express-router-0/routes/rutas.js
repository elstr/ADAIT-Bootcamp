// incluimos el modulo de express
const express = require('express');

// creamos las rutas
// creamos el router de express
const router = express.Router();

// creo el array de los favoritos
const todosLosFavoritos = [];

// creamos una ruta
router.get('/favoritos', function (req, res, next) {
  res.send(todosLosFavoritos);
});

// creamos un post para agregar un favorito
router.post('/favoritos', function (req, res) {
  todosLosFavoritos.push(Math.random());
  console.log(todosLosFavoritos);

  res.send('ok');
});

module.exports = router;