var http = require('http');

console.log("Arrancando servidor...")

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {
  console.log("---> Peticion recibida")
  console.log("HOST: " + req.headers.host)
  console.log("USER AGENT: " + req.headers['user-agent'])
}).listen(8080);
