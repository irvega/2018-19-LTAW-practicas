const http = require('http');
const express = require('express')
const app = express();
const mijson = require('./static/datos.json');

app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {res.sendFile(__dirname + '/tienda.html')});
app.get('/prod1.html', (req, res) => {res.sendFile(__dirname + '/prod1.html')});
app.get('/prod2', (req, res) => {res.sendFile(__dirname + '/prod2.html')});
app.get('/form1', (req, res) => {res.sendFile(__dirname + '/form1.html')});
app.get('/ingreso', (req, res) => {res.sendFile(__dirname + '/ingreso.html')});

//Recibe mensaje y lo lee
app.post('/search', (req, res) => {
    // data = JSON.stringify(req.body);
    //Nombre del articulo
    data = req.body.search;
    console.log(data);
    // JSON.stringify(mijson);
    let prod = completeProd(data, mijson);
    res.send('Esto es: ' + prod);

});

function completeProd(data, mijson){
  // console.log(mijson);
  let prodTotal = [];
  for (d in mijson) {
    mijson[d].forEach(element => {
      if (element.name == data) {
        console.log(element);
        prodTotal.push(element);
      }
    });
  }
  return prodTotal;
  console.log(prodTotal);
}

app.listen(9090);
