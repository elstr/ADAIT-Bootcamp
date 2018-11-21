var http = require("http");
var fs = require("fs");

function onRequest(request, response) {
  console.log({ request });
  fs.readFile("./index.html", function(err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

var server = http.createServer(onRequest);
server.listen(8080);

console.log("Server escuchando en puerto 8080");
