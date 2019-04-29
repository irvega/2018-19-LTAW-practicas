var http = require('http');
var url = require('url');
var fs = require('fs');

console.log("Arrancando servidor...")


http.createServer(function (req, res) {

    console.log("Recurso soliditado (URL): " + req.url);

    var q = url.parse(req.url, true);
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


    content = "Bienvenido a mi tienda "
    // num = ""
    if (req.method === 'POST') {
      req.on('data', chunk => {
          //-- Leer los datos (convertir el buffer a cadena)
          data = chunk.toString();
          //-- Añadir los datos a la respuesta
          content += data;
          // num = Math.floor(Math.random());
          // content += "Id" + num.toString();
          //-- Fin del mensaje. Enlace al formulario
          // content += `
          //     </p>
          //     <a href="/">[Formulario]</a>
          //   </body>
          // </html>
          // `
          //-- Mostrar los datos en la consola del servidor
          console.log("Datos recibidos: " + data)
       });

       req.on('end', ()=> {
         //-- Generar el mensaje de respuesta
         res.setHeader('Content-Type', 'text/html')
         res.write(content);
         res.end();
       })
    }


    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }

      //-- Tipo mime por defecto: html
      var mime = "text/html"

      // if (['png', 'jpg', 'jpeg'].includes(tipo)) {
      //   console.log("IMAGEN!")
      //   mime = "image/" + tipo
      // }

      if (tipo == "png") {
        mime = "image/png"
      }

      if (tipo == "jpg") {
        mime = "image/jpeg"
      }

      if (tipo == "jpeg") {
        mime = "image/jpeg"
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
      //-- Se intenta acceder a un recurso que no existe
      // default:
      // content = "Error";
      // res.statusCode = 404;
      // });

    
}).listen(8080);
