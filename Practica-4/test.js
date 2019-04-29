var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var user = 0;
//--Servir la pagina principal
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log(": /")
});

//-- Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Client solicituado")
});

app.get('/help', function(req, res){
  res.send('Comandos soportados:' + '\n\n' + '/list: Devolverá el número de usuarios conectados\n /hello: El servidor nos devolverá el saludo\n /date: Nos devolverá la fecha\n')
});

app.get('/list', function(req, res){
  res.send('Número de usuarios conectados: ' + user.toString())
});

app.get('/hello', function(req, res){
  res.send('Hello, whats up! ')
});
app.get('/date', function(req, res){
  var f = new Date();
  //res.send('La fecha actual es: ' + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  res.send('La fecha actual es: ' + diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

});


//-- Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on *:3000');
});

//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');
  user= user + 1;
  // Enviar saludo al que se conecta
  //socket.broadcast.emit('hi man');
  
   msg = 'Nuevo usuario conectado!';
   io.emit('new_message', msg);
  //-- Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
    user= user - 1;
  });

  // sending to individual socketid (private message)
  // io.to(`${socketId}`).emit('hey', 'Welcome');

  //-- Detectar si se ha recibido un mensaje del cliente
   socket.on('new_message', msg => {
   //-- Notificarlo en la consola del servidor
   console.log("Mensaje recibido: " + msg)
   //-- Emitir un mensaje a todos los clientes conectados
   io.emit('new_message', msg);
 })

});
