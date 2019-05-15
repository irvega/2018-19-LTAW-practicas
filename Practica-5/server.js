const express = require('express');
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let user = 0;

app.use('/static', express.static('static'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  console.log(": /")
});

//Servir el cliente javascript
app.get('/chat-client.js', function(req, res){
  res.sendFile(__dirname + '/chat-client.js');
  console.log("Client solicitado")
});

//Lanzar el servidor
http.listen(3000, function(){
  console.log('listening on :3000');
});

//Evento: Nueva conexion recibida
io.on('connection', function(socket){
  console.log('--> Usuario conectado!');
  user= user + 1;
  // Enviar saludo al que se conecta
  msg = 'Hi man !';
  socket.emit('new_message', msg);

  //Envio a todos usuarios menos al que se conecta (lo envia)
  msg = 'Nuevo usuario conectado!';
  socket.broadcast.emit('new_message', msg);

  //Detectar si el usuario se ha desconectado
  socket.on('disconnect', function(){
    console.log('--> Usuario Desconectado');
    user= user - 1;
    msg = 'Adios: Se ha desconectado un usuario !';
    io.emit('new_message', msg);
  });

  //Detectar si se ha recibido un mensaje del cliente
   socket.on('new_message', msg => {
     let m = msg.split(": ", 2)[1];
     // console.log('AQUI: ')
     // console.log(m);
     if (m == '/help') {
       msg = 'Comandos soportados:' + '<br><br>' + '/list: Devolverá el número de usuarios conectados<br> /hello: El servidor nos devolverá el saludo<br> /date: Nos devolverá la fecha<br>';
       socket.emit('new_message', msg);
     } else if (m == '/list') {
       msg = 'Número de usuarios conectados: ' + user.toString();
       socket.emit('new_message', msg);
     } else if (m == '/hello') {
       msg = 'Hello, whats up! ';
       socket.emit('new_message', msg);
     } else if (m == '/date') {
       let f = new Date();
       // msg = 'La fecha actual es: ' + f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
       let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
       let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

       msg = 'La fecha actual es: ' + diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
       socket.emit('new_message', msg);
     }else {
       //Emitir mensaje todos clientes conectados
       io.emit('new_message', msg);
     }
     //Consola del servidor
     console.log("Mensaje recibido: " + msg)
   })
});
