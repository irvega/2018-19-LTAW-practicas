const http = require('http');
const express = require('express')
const app = express();

app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {res.sendFile(__dirname + '/tienda.html')});
app.get('/prod1.html', (req, res) => {res.sendFile(__dirname + '/prod1.html')});
app.get('/prod2', (req, res) => {res.sendFile(__dirname + '/prod2.html')});
app.get('/form1', (req, res) => {res.sendFile(__dirname + '/form1.html')});
app.get('/ingreso', (req, res) => {res.sendFile(__dirname + '/ingreso.html')});

app.post('/search', (req, res) => { 
    // data = JSON.stringify(req.body);
    //Nombre del articulo
    data = req.body.search;
    console.log(data)

});

app.listen(9090);