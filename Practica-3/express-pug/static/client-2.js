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
//Crear cookie formulario pago
function form_cookie() {
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('apellido').value
  let correo = document.getElementById('correo').value
  // let pago = document.getElementById('nombre').value
  document.cookie= "nombre = " + nombre;
  document.cookie= "apellido = " + apellido;
  document.cookie= "correo = " + correo;
  // document.cookie= "pago = " + pago;
}

//Crear cookie carrito
function shop_cookie(part) {
  let username = user();
  //devuelve json
  let list = PeticionAJAX();
  // console.log(list)
  let prod = [];
  if (username != undefined) {
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
      document.cookie= "nameS = " + name;
      document.cookie= "imagenS = " + img;
      document.cookie= "stockS = " + stock;
      document.cookie= "precioS = " + price;

      alert("¡Has añadido un articulo a tu carrito!");
  }else {
    alert("No te conozco... Registrate!");
  }
}

function carrito(){
  let username = user();
  if (username == undefined) {
     alert("No te conozco... Registrate!");
     // document.cookie = "nameS=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
  }else {
      setTimeout(function(){
        if (username == 'irene') {
        // if (window.location.href == "/tienda") {
            console.log('AAAAAAAAAAAAAAAAAAAA')
            alert("No tienes artículos en tu carrito... Añadelos!")
        }
      }, 2000);
      window.location.href= "/carrito";
  }
}


//Devuelve nombre user conectado
function user(){
  // console.log(document.cookie);
  let u = document.cookie.split(";", 1);
  // alert(typeof u);
  let n = u.toString().split("=", 2);
  let username;
  console.log(n)
  if (n != '') {
    username = n[1].toString();
  }else {
    username = undefined;
  }
  console.log(username)
  return username;
}
