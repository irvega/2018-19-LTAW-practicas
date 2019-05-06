function PeticionAJAX() {
  let request = new XMLHttpRequest();
  request.open('GET', 'static/datos.json', false);
  request.send();

  let prod = JSON.parse(request.responseText);
  return prod;
  // console.log(prod);
}
// Recojo lista nombres de productos del json
function lista(){
  let prod = PeticionAJAX();
  let list = [];
  for (p in prod) {
    prod[p].forEach(element => {
      list.push(element.name);
    });
  }
  return list;
  // console.log(list);
}

// Abro desplegable buscador con contenido
function buscar(){
  let list = lista();
  list.forEach(element => {
    let option = document.createElement("option");
    option.value = element;
    document.getElementById("busc").appendChild(option);
  });
}

//Crear cookie registro
function reg_cookie() {
    let username = document.getElementById('nombre').value
    document.cookie= "username = " + username;
}

//Crear cookie carrito
function shop_cookie(part) {
  //devuelve json
  let list = PeticionAJAX();
  // console.log(list)
  let prod = [];
  //Consigo mi prod entero
  for (l in list) {
    list[l].forEach(element => {
      if (part == element.image) {
        prod.push(element);
      }
    });
  }
  //Separo variables de mi prod
  prod.forEach(element => {
    name = element.name;
    img = element.image;
    stock = element.stock;
    price = element.price;
  });
  // console.log(prod);
  document.cookie= "name = " + name;
  document.cookie= "imagen = " + img;
  document.cookie= "stock = " + stock;
  document.cookie= "precio = " + price;

  alert("¡Has añadido un articulo a tu carrito!");
}

function carrito(){
  console.log('HOLIII')
  window.location.href= "/carrito";
}
