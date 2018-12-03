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
// cuando le pego a la url especifica ("/") se va a ejecutar el call back con su req y res
router.get("/layout", (req, res) => {
  res.render("layout", {
    nombre: "LELE"
  });
});
// cuando le pego a la url especifica ("/") se va a ejecutar el call back con su req y res
router.get("/holaconpug", (req, res) => {
  res.render("holaconpug");
});

module.exports = router;
