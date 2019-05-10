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
let c = 0;
// Abro desplegable buscador con contenido
function buscar(){
  let list = lista();
  let f = document.getElementById("key").addEventListener("keyup", cuenta);
  console.log(f)
  let v = f.value;
  console.log(v)
   if (v==3) {
    console.log('TRES')
    list.forEach(element => {
      let option = document.createElement("option");
      option.value = element;
      document.getElementById("busc").appendChild(option);
    });
   }
}
function cuenta() {
  c = c + 1;
  console.log('PRESS')
  console.log(c)
  return c
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
