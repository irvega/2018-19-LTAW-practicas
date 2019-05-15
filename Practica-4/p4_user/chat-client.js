function main() {
  console.log("Client!")
  //Crear el websocket
  let socket = io();
  let send = document.getElementById('send')
  //-- Parrafo para mostrar mensajes recibidos
  let display = document.getElementById('display')
  let msg = document.getElementById("msg")
  let user = document.getElementById("user")

  //Cuando se aprieta el botón de enviar
  send.onclick = () => {
    if (user.value == "") {
      let n = Math.floor(Math.random() * (100 - 1)) + 1;
      console.log(n)
      user.value= 'User' + n;
    }
    //Envia mensaje, con el evento "new_message"
    socket.emit('new_message', user.value + ': '  + msg.value);
    console.log("Mensaje emitido" + msg)
  }

  //Enviar msg tecla ENTER
  msg.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
      if (user.value == "") {
        let n = Math.floor(Math.random() * (100 - 1)) + 1;
        console.log(n)
        user.value= 'User' + n;
      }
      // socket.emit('new_message', {name: user, message: msg.value});
      // socket.emit('new_message', msg.value);
      socket.emit('new_message', user.value + ': '  + msg.value);
      console.log("Mensaje emitido" + msg)
    }
  })
  //Recibo msg del servidor se muestra en el párrafo
  socket.on('new_message', msg => {
    display.innerHTML += msg + '<br>';
  });
}
