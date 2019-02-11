var http = require('http');

console.log("Arrancando servidor...")

//-- Configurar el servidor. Cada vez que llegue una peteicion se emite un
//-- evento y se invoa a la funcion server_req
server = http.createServer(server_req)

//-- Funcion de retrollamada de servicio de las peticiones
//-- No se devuelve mensaje, se indica en consola que ha llegado
//-- una peticion
function server_req(req, res) {
  console.log("---> Peticion recibida")
}

//-- Queremos que el servidor escuche peticiones en puerto 8080
server.listen(8080);
