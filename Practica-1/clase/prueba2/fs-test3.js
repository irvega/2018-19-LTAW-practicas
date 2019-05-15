var fs = require('fs');

console.log("Este mensaje está AL COMIENZO del código")

//-- Leer el fichero
fs.readFile('test.txt', 'utf8', function (err, data) {
    console.log("---> Comienzo del fichero leido")
    console.log(data)
    console.log("---> Final del fichero")
});

console.log("Este mensaje está al FINAL del código")
