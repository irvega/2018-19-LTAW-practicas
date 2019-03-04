function main()
{
  console.log("Holaaaaaaaaaa")

  var boton = document.getElementById('boton')
  var img = document.getElementById('logo')

  var img_on = true;

  boton.onclick= () => {
    if (img_on) {
      img.style.display="None"
      img_on = false
    }
    else {
      img.style.display = "inline"
      img_on = true
    }
  }
}
