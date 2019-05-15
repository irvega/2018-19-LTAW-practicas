var fs = require('fs');

//-- Leer el fichero
fs.readFile('test.txt', 'utf8', (err, data) => {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
});
