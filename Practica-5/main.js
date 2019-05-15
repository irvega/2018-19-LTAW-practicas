const electron = require('electron')

console.log("Arrancando electron...")

//Punto de entrada. En cuanto electron está listo, ejecuta esta función
electron.app.on('ready', ()=>{
  console.log("Evento Ready!")

  // Crear la ventana principal de nuestra Interfaz Gráfica
  win = new electron.BrowserWindow({
    width: 600,
    height: 400
  })

  //En la parte superior se nos ha creado el menu por defecto
  //Si lo queremos quitar, hay que añadir esta línea
  // win.setMenuBarVisibility(false)

  //Cargar la interfaz gráfica, que se encuentra en index.html
  win.loadFile('index.html')
})
