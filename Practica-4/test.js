var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log("Página principal2: /")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Fichero js solicituado")
});

//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');

  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
  });

  //-- Detectar si se ha recibido un mensaje del cliente
   socket.on('new_message', msg => {

   //-- Notificarlo en la consola del servidor
   console.log("Mensaje recibido: " + msg)
   // sending to individual socketid (private message)
   io.to(`${socketId}`).emit('hey', 'Welcome');
   //-- Emitir un mensaje a todos los clientes conectados
   io.emit('new_message', msg);
 })

});
