// importo express
const express = require("express");
// me traigo el router de express
const router = express.Router();

// Defino todas mis rutas

router.get("/hello", (req, res) => {
  res.send("hello");
});

// cuando le pego a la url especifica ("/") se va a ejecutar el call back con su req y res
router.get("/", (req, res) => {
  const lele = { name: "lele", age: 100, cool: true };
  res.json(lele);

  // Tomando los parametros de la URL
  // localhost:3000/?name=estefi&curso=4
  //   res.send(req.query);
});

// Route con parametros
router.get("/user/:name", (req, res) => {
  // res.send("funciona!");
  // console.log(req.params);
  res.send(req.params);
});
// Route con parametros y hacemos algo con los parametros
router.get("/reverse/:name/:lastName", (req, res) => {
  // res.send("funciona!");
  console.log(req.params);
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
