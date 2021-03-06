var http = require('http');
var url = require('url');
var fs = require('fs');

const PORT = 8080
// Con localhost en vez de 127.0.0.1
console.log("Arrancando servidor en puerto " + PORT)

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {

  //-- Mostrar en la consola el recurso al que se accede
  var q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":
      fs.readFile("./tienda.html", function(err, data) {
        //-- Generar el mensaje de respuesta
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        return
      });
      break;

    //-- Fichero js cliente
    case "/client-2.js":
      fs.readFile("./client-2.js", function(err, data) {
        //-- Generar el mensaje de respuesta
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.write(data);
        res.end();
        return
      });
      break;

    case "/prod1.html":
      fs.readFile("./prod1.html", function(err, data) {
        //-- Generar el mensaje de respuesta
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        return
      });
      break;

      case "/prod2.html":
        fs.readFile("./prod2.html", function(err, data) {
          //-- Generar el mensaje de respuesta
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
          return
        });
        break;

      case "/form1.html":
        fs.readFile("./form1.html", function(err, data) {
          //-- Generar el mensaje de respuesta
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
          return
        });
        break;

      case "/ingreso.html":
        fs.readFile("./ingreso.html", function(err, data) {
          //-- Generar el mensaje de respuesta
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
          return
        });
        break;

    //-- Se intenta acceder a un recurso que no existe
    default:
      content = "Error";
      res.statusCode = 404;
      //-- Generar el mensaje de respuesta
      res.setHeader('Content-Type', 'text/html')
      res.write(content);
      res.end();
  }

}).listen(PORT);
