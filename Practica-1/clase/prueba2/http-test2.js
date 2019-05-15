var http = require('http');

console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peteicion se emite un
//-- evento y se invoa a la funcion server_req
server = http.createServer((req, res) => {
  console.log("---> Peticion recibida")
});

//-- Queremos que el servidor escuche peticiones en puerto 8080
server.listen(8080);
