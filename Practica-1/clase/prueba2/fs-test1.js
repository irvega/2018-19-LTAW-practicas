var fs = require('fs');

console.log("MENSAJE NUMERO 1")

//-- Funcion llamada cuando se ha terminado de leer el fichero
function show_file(err, data) {
    console.log("--> comienzo del fichero")
    console.log(data)
    console.log("--> final del fichero")
}
//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test.txt', 'utf8', show_file);

console.log("MENSAJE FINAL")
