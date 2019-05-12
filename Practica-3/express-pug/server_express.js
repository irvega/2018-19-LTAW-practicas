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
  }else {
    username = req.cookies.username;
  }
  res.render('tienda', { user: username});
});

app.get('/ingreso', (req, res) => {res.sendFile(__dirname + '/views/ingreso.html')});
app.get('/formulario', (req, res) => {res.sendFile(__dirname + '/views/form1.html')});

//Acceso carrito
app.get('/carrito', (req, res) => {
  let [prod, price] = cookieShop(req);
  res.render('carrito', {prod: prod});

});

//Recibe busqueda prod
app.post('/search', (req, res) => {
    // data = JSON.stringify(req.body);
    //Nombre del articulo
    data = req.body.search;
    console.log(data);
    // JSON.stringify(mijson);
    let prod = completeProd(data, mijson);
    console.log(prod)
    // let name, img, stock,  price;
    // prod.forEach(element => {
    //   name = element.name;
    //   img = element.image;
    //   stock = element.stock;
    //   price = element.price;
    // });
    // res.send(prod);
    // res.render('prodCompleto', {prod: prod, name: name, img: img, stock: stock, price: price, title: 'Hey'});
    res.render('prodAdd', {prod: prod, title: 'Hey'});
});

//Clicar en  boton camisetas
app.get('/camisetas', (req, res) => {
  let prodTotal = mijson['Camisetas']
  // console.log(prodTotal)
  res.render('prodAdd', {prod: prodTotal});
});

//Clicar en calcetines
app.get('/calcetines', (req, res) => {
  let prodTotal = mijson['Calcetines']
  res.render('prodAdd', {prod: prodTotal});
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

//Pantalla despues de compra
app.post('/compra', (req, res) => {
  let [prod, price] = cookieShop(req);
  res.render('compra', {prod: prod, price: price, pago: req.cookies.pago, nombre: req.cookies.nombre, apellido: req.cookies.apellido, correo: req.cookies.correo});
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


//Leer cookies los productos selecionados en carrito
function cookieShop(req) {
  console.log('Cookies: ', req.cookies)
  let cook = req.cookies;
  let data, prodInd, priceInd;
  let price = 0.0;
  let prod = [];
  //Busca en la cookies nameS para ver añadir add
  for (c in cook) {
    if (c.includes(c.match(/^nameS/))) {
      data = cook[c];
      prodInd = completeProd(data, mijson)[0];
      prod.push(prodInd);
      priceInd = parseFloat(prodInd.price);
      price = price + priceInd;
    }
  };
  return [prod, price];
}

app.listen(9090);
