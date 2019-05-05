function PeticionAJAX() {
  let request = new XMLHttpRequest();
  request.open('GET', 'static/datos.json', false);
  request.send();

  let prod = JSON.parse(request.responseText);
  return prod;
  console.log(prod);

}
// Recojo lista de productos del json
function lista(){
  let prod = PeticionAJAX();
  let list = [];
  for (p in prod) {
    prod[p].forEach(element => {
      list.push(element.name);
    });
  }
  return list;
  console.log(list);
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

// esta funcion me va a introducir lo buskdo
// function mazoguapa(name) {
//   return objeto;
// }
