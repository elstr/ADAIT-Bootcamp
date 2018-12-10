// incluimos el modulo de express
const express = require('express');
const bodyParser = require('body-parser');

// creamos la aplicacion de express
const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/rutas');

// le decimos a express que use el router
app.use(router);

// le decimos a express que deje corriendo el servidor, en el puerto 3000
app.listen(3000, function () {
  console.log('server listening...')
});