// incluimos el modulo de express
const express = require('express');

// creamos la aplicacion de express
const app = express();

// creamos las rutas
// creamos el router de express
const router = express.Router();

// creamos una ruta
router.get('/favoritos', function (req, res, next) {
  res.send('<h1>hola</h1>');
});

router.post('/favoritos', function (req, res) {
  // y aca hacemos algo
});

// le decimos a express que use el router
app.use(router);

// le decimos a express que deje corriendo el servidor, en el puerto 3000
app.listen(3000, function () {
  console.log('server listening...')
});