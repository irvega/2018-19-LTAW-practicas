var fs = require('fs');

//-- Leer el fichero test2.txt, que NO existe
fs.readFile('test2.txt', 'utf8', (err, data) => {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
});
