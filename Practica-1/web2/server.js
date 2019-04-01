var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")


http.createServer(function (req, res) {

    console.log("Recurso soliditado (URL): " + req.url);

    var q = url.parse(req.url, true);
    console.log("URL parseada: ")
    console.log("Host: " + q.host)
    console.log("pathname:" + q.pathname)

    var filename = ""
    filename = q.pathname;

    //-- Obtener el nombre del fichero a partir del recurso solicitado
    if (q.pathname == "/")
      filename += "tienda.html"
    else {
      filename = q.pathname
    }

    tipo = filename.split(".")[1]
    filename = "." + filename
    console.log("Filename: " + filename)
    console.log("Tipo: " + tipo)

    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }

      //-- Tipo mime por defecto: html
      var mime = "text/html"

      if (['png', 'jpg'].includes(tipo)) {
        console.log("IMAGEN!")
        mime = "image/" + tipo
      }

      if (tipo == "css") {
        mime = "text/css"
      }
      if (tipo == "json") {
        mime = "text/json"
      }

      //-- Generar el mensaje de respuesta
      res.writeHead(200, {'Content-Type': mime});
      res.write(data);
      res.end();
    });

}).listen(8080);
