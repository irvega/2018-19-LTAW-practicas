var http = require('http');
var url = require('url');

const PORT = 8080

console.log("Arrancando servidor en puerto " + PORT)

//-- Configurar y lanzar el servidor. Por cada peticion recibida
//-- se imprime un mensaje en la consola
http.createServer((req, res) => {

  //-- Mostrar en la consola el recurso al que se accede
  var q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Leer las cookies
  var cookie = req.headers.cookie;
  console.log("Cookie: " + cookie)

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":
      content = "Bienvenido a mi tienda "

      //-- No hay ninguna cookie
      if (!cookie) {
        content += "\nNo te conozco... Registrate!\n"
        content += "Accede a /login"

      //-- Hay definida una Cookie.
      } else {
        content += "Obijuan"
      }

      res.statusCode = 200;
      break;

    //-- Pagina de acceso
    case "/login":
      content = "Registrado! Cookie enviada al navegador!"

      //-- ESTABLECER LA COOKIE!!
      res.setHeader('Set-Cookie', 'user=obijuan')
      break

    //-- Se intenta acceder a un recurso que no existe
    default:
      content = "Error";
      res.statusCode = 404;
  }


  //-- Generar el mensaje de respuesta
  res.setHeader('Content-Type', 'text/plain')
  res.write(content);
  res.end();

}).listen(PORT);
