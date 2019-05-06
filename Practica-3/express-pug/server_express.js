const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const mijson = require('./static/datos.json');

app.set('view engine', 'pug');

app.use('/static', express.static('static'));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  let username;
  if (req.cookies.username == undefined) {
    username = 'usuario desconocido';
    // res.clearCookie('imagen');
  }else {
    username = req.cookies.username;
  }
  res.render('tienda', { user: username});
});
app.get('/prod1.html', (req, res) => {res.sendFile(__dirname + '/prod1.html')});
app.get('/prod2.html', (req, res) => {res.sendFile(__dirname + '/prod2.html')});
app.get('/ingreso.html', (req, res) => {res.sendFile(__dirname + '/ingreso.html')});

//Acceso carrito
app.get('/carrito', (req, res) => {
  console.log('Cookies: ', req.cookies)
  if (req.cookies.username == undefined || req.cookies.nameS == undefined) {
    console.log('No tienes articulos añadidos!')
    res.render('tienda', { user: req.cookies.username});
  }else {
    res.render('carrito', {img: req.cookies.imagenS, name: req.cookies.nameS, stock: req.cookies.stockS, price: req.cookies.precioS});
  }
});

//Recibe busqueda prod
app.post('/search', (req, res) => {
    // data = JSON.stringify(req.body);
    //Nombre del articulo
    data = req.body.search;
    console.log(data);
    // JSON.stringify(mijson);
    let prod = completeProd(data, mijson);
    let name, img, stock,  price;
    prod.forEach(element => {
      name = element.name;
      img = element.image;
      stock = element.stock;
      price = element.price;
    });
    // res.send(prod);
    res.render('prodCompleto', { name: name, img: img, stock: stock, price: price, title: 'Hey'});
});

//Volver home desde ingreso, leer cookie
app.post('/', (req, res) => {
    let username;
    if (req.cookies.username == undefined) {
      username = 'usuario desconocido';
    }else {
      username = req.cookies.username;
    }
    console.log('Cookies: ', req.cookies)
    res.render('tienda', { user: username});
});

//Lee json y guarda producto entero no solo nombre
function completeProd(data, mijson){
  // console.log(mijson);
  let prodTotal = [];
  for (d in mijson) {
    mijson[d].forEach(element => {
      if (element.name == data) {
        // console.log(element);
        prodTotal.push(element);
      }
    });
  }
  console.log(prodTotal);
  return prodTotal;
}

app.listen(9090);
