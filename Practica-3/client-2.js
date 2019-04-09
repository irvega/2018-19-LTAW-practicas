function main()
{
  //-- Traza de prueba
  console.log("Client!")

  //-- Obtener el botón de VER del DOM
  var ver = document.getElementById('ver')

  //-- Obtener el párrafo del DOM donde mostrar el resultado
  var resultado = document.getElementById('resultado');

  //-- Cuando el usuario aprieta el botón de ver los productos
  ver.onclick = () => {

    //-- Crear objeto para hacer peticiones AJAX
    m = new XMLHttpRequest();

    //-- Configurar la petición
    m.open("GET", "datos.json", true);

    //-- Cuando la haya alguna noticia sobre la peticion
    //-- ejecuta este código
    m.onreadystatechange = function () {
      //-- Petición enviada y recibida. Todo OK!
      if (m.readyState == 4 && m.status == 200) {

        //-- La respuesta es un objeto JSON
        var o = JSON.parse(m.responseText)
        console.log(o);
        
         //-- Borrar el resultado anterior que hubiese en el párrafo
         //-- de resultado
         resultado.innerHTML = "";

        //  //--Recorrer los productos del objeto JSON
        //  for (i=0; i < o.Camisetas.length; i++) {

        //    //-- Añadir cada producto al párrafo de visualización
        //    resultado.innerHTML += o.Camisetas.name[i];

        //    //-- Separamos los productos por ',''
        //    if (i<o.Camisetas.length-1) {
        //      resultado.innerHTML += ', ';
        //    }
        //  }
          }
       }

    //  //-- Enviar la petición!
         m.send();
  }

}
