from django.http import HttpResponse
from django.template import Template, Context

def mi_funcion(request):
	html = "Hola! Mi primera UrL!!"
	return HttpResponse(html)

def mi_producto(request, param):
	numero = int(param)
	html = "Acceso a producto: %i" % numero;
	return HttpResponse(html)


PLANTILLA = """
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Saludo</title>
  </head>
  <body>
    <p>Bienvenido a mi tienda, {{user}}</p>
  </body>
</html>
"""

def saludo(request):
    # --Procesar la plantilla
    t = Template(PLANTILLA)

    # -- Crear el contexto: Nombre de usuario real
    c = Context({'user':'Epic Saxo guy'})

    # -- Obtener la pagina html final
    html = t.render(c)
    return HttpResponse(html)

def venta(request):
    fp = open('/home/alumnos/ivega/2018-19-LTAW-practicas/Practica-2/mi_tienda/mi_tienda/producto.html')
    t = Template(fp.read())
    fp.close()
    c = Context({'producto':'LANGOSTAS'})
    html = t.render(c)
    return HttpResponse(html)
