// incluimos el modulo de express
const express = require('express');

// creamos las rutas
// creamos el router de express
const router = express.Router();

// creo el array de los favoritos
const todosLosFavoritos = [
  { nombre: 'saraza', edad: 20, id: 1 },
  { nombre: 'zalala', edad: 27, id: 2 }
];

let contador = 3;

// creamos una ruta
router.get('/favoritos', function (req, res, next) {
  res.send(todosLosFavoritos);
});

// creamos un post para agregar un favorito
router.post('/favoritos', function (req, res) {
  let favorito = {
    nombre: req.body.nombre,
    edad: req.body.edad,
    id: contador++
  }
  todosLosFavoritos.push(favorito);

  res.send('ok');
});

router.get('/favoritos/:id', function (req, res) {
  const idDelFavorito = req.params.id;

  const elFavorito = todosLosFavoritos.find(f => f.id == idDelFavorito);

  res.json(elFavorito);
});

module.exports = router;