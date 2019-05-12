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
  //Bucle objeto {}
  for (p in prod) {
    prod[p].forEach(element => {
      list.push(element.name);
    });
  }
  // console.log(list)
  return list;
}

// Abro desplegable buscador con contenido
function buscar(){
  document.getElementById("key").addEventListener("keyup", cuenta);
}
//Miro que haya 3 letras en buscador
function cuenta() {
  let list = lista();
  console.log('PRESS')
  let palabra = document.getElementById("key").value;
  let letras = palabra.length;
  // letras = palabra.substr(0,2);
  console.log('num: ' + letras)
   if (letras == 3) {
    console.log('TRES')
    list.forEach(element => {
      let option = document.createElement("option");
      option.value = element;
      document.getElementById("busc").appendChild(option);
    });
   }
}

//Crear cookie registro
function reg_cookie() {
    let username = document.getElementById('nombre').value
    let contraseña = document.getElementById('contraseña').value
    document.cookie= "username = " + username;
    document.cookie= "contraseña = " + contraseña;
}

//Crear cookie formulario pago
function form_cookie() {
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('apellido').value
  let correo = document.getElementById('correo').value
  let pago1 = document.getElementById('paypal')
  let pago2 = document.getElementById('tarjeta')
  let pago3 = document.getElementById('trans')
  document.cookie= "nombre = " + nombre;
  document.cookie= "apellido = " + apellido;
  document.cookie= "correo = " + correo;

  if (pago1.checked == true) {
    document.cookie= "pago = paypal";
  }else if (pago2.checked == true) {
    document.cookie= "pago = tarjeta";
  }else if (pago3.checked == true) {
    document.cookie= "pago = transferencia";
  }

}

//Add: Crear cookie carrito
function shop_cookie(part) {
  let d = document.cookie;
  let username = d.includes(d.match(/username/));
  if (username == true) {
      document.cookie= "nameS" + part + "= " + part;
      // document.cookie= "imagenS = " + img;
      // document.cookie= "stockS = " + stock;
      // document.cookie= "precioS = " + price;

      alert("¡Has añadido un articulo a tu carrito!");
      window.location.href= "/";
  }else {
    alert("No te conozco... Registrate!");
    window.location.href= "/ingreso.html";
  }
}

//Clicar carrito
function carrito(){

  let d = document.cookie;
  let add = d.includes(d.match(/nameS/));
  let username = d.includes(d.match(/username/));
  console.log(add)
  console.log(username)

  if (username == false) {
     alert("No te conozco... Registrate!");
    //  document.cookie = "nameS=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }else {
      if (add == false) {
        alert("No tienes artículos guardados... Añadelos!");
      }else{
        window.location.href= "/carrito";
      }
  }
}

//Delete: Borrar elemento cookie carrito
function carrito_delete(part) {
  let d = document.cookie;
  let username = d.includes(d.match(/username/));
  if (username == true) {
      document.cookie = "nameS" + part + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      window.location.href= "/";
  }else {
    alert("No te conozco... Registrate!");
    window.location.href= "/ingreso.html";
  }
}

//Devuelve nombre user conectado
// function user(){
//   console.log(document.cookie);
//   let u = document.cookie.split(";", 1);
//   // alert(typeof u);
//   let n = u.toString().split("=", 2);
//   let username;
//   console.log(n)
//   if (n != '') {
//     username = n[1].toString();
//   }else {
//     username = undefined;
//   }
//   console.log(username)
//   return username;
// }
