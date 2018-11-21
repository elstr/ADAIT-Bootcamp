// Vamos a armar un servidor que ante cualquier peticion responda Hello World
// Utilizaremos http
// http tiene un método que es createServer, encargado de crear un server

// Cargar el modulo HTTP
var http = require("http");

// Configurar una respuesta HTTP para todas las peticiones
// Node le manda a mi funcion los objetos request y response
function onRequest(request, response) {
  console.log("Recibimos una peticion");
  // Toda la informacion respecto a la peticion se encuentra dentro de request
  console.log(request);

  // Response: Es el objeto que devuelve data asociada a esa peticion.
  // writeHead: Devuelvo el status y el tipo de content que voy a devolver
  // Este metodo se debe llamar solo una vez y antes de response.end()
  response.writeHead(200, { "Content-Type": "text/html" });
  // Devuelvo dentro de mi response lo que necesito
  response.write("Hola Mundo");
  // Especifico que termine de tratar mi response
  response.end();
}

// Creo un server con htt.createServer y para cualquier request voy a llamar a mi funcion onRequest
var server = http.createServer(onRequest);

// Le digo a mi server que escuche todas las peticiones que lleguen al puerto 8080
server.listen(8080);

// Pongo un mensaje en la consola para ver que se este ejecutando bien
console.log("Server escuchando en puerto 8080");
