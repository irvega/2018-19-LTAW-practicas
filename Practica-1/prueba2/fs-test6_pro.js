var fs = require('fs');

//-- Leer el fichero
fs.readFile('test2.txt', 'utf8', (err, data) => {
    if (err) {
      console.log()
      console.log("-------> ERROR!!")
      console.log(err.message)
      console.log()
    }
    else { //-- Lectura normal, cuando no hay errores
      console.log("---> Comienzo del fichero leido")
      console.log(data)
      console.log("---> Final del fichero")
    }
});
