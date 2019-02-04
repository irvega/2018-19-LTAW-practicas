var http = require('http');
var fs = require('fs');

console.log("Arrancando servidor...")


http.createServer(function (req, res) {
  fs.readFile('tienda.html', function(err, data) {
    console.log("Recurso soliditado (URL): " + req.url);
    console.log("Peticion atendida");
    if (req.url.split('.')[1] == 'css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        return res.end();
    }else if (req.url.split('.')[1] == 'jpg'){
      fs.readFile('peaky.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/jpg'});
      });
    };
    res.end(data);
  });
}).listen(8080);
