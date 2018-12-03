var fs = require("fs");
var http = require("http");
http
  .createServer(function(req, res) {
    // fs.writeFile("text-test.txt", "PISANDO EL CONTENIDO", function(err) {
    //   console.log("ACABO DE PISAR EL CONTENIDO");
    // });
    fs.unlink("text-test.txt", function(err) {
      console.log("ACABO DE BORRAR EL ARCHIVO");
    });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hola mundo");
    res.end();
  })
  .listen(8080);
