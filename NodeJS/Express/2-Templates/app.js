const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes/index");

// create our Express app
const app = express();

// El body del req es donde está la data que me manda el cliente.
// bodyParser agarra ese body y lo parsea a json para que lo podamos usar
app.use(bodyParser.json());
// urlencoded extended true lo que hace es parsear la data que venga en la URL y la guarda en req.query
app.use(bodyParser.urlencoded({ extended: true }));

// Por último: seteamos nuestras rutas
// Entonces cada vez que el cliente le pegue a localhost:puerto/ (puertoBARRA)
// vamos a ir a buscar nuestras rutas a ver a cuál corresponde
app.use("/", routes);

// Tambien puedo separar mis rutas
// app.use("/admin", adminRoutes)

// seteo en views el path de la carpeta views
app.set("views", path.join(__dirname, "views"));
// path.join(__dirname, "views")); nos devuelve el path de nuestra carpeta views

// le digo a express que el view engine es PUG
// si usamos otro view engine como mustache o EJS tmb se pone aca
app.set("view engine", "pug");

// ANDIAMO BAMBINA -> Export de app para poder llamarlo desde start.js
module.exports = app;
