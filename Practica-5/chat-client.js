function main() {
  console.log("Client!")

  //-- Crear el websocket
  let socket = io();
  //Obtener los elementos de interfaz del DOM:

  //Boton de envio de mensaje
  let send = document.getElementById('send')
  //-- Parrafo para mostrar mensajes recibidos
  let display = document.getElementById('display')
  //-- Caja con el mensaje a enviar
  let msg = document.getElementById("msg")

  //Cuando se aprieta el botón de enviar...
  send.onclick = () => {
    //Envia mensaje, con el evento "new_message"
    socket.emit('new_message', msg.value);
    console.log("Mensaje emitido" + msg)
    //-- Añadir la cadena al párrafo
    display.innerHTML += "envio: " + msg;
  }

  //Cuando se reciba un mensaje del servidor se muestra en el párrafo
  socket.on('new_message', msg => {
    display.innerHTML += msg + '<br>';
  });
}

