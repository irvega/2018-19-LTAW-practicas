from django.http import HttpResponse
from django.template import Template, Context
from django.shortcuts import render

def index(request):
    return render(request, 'main.html', {'user':'IRENE'})

def mi_producto(request, param):
	numero = int(param)
	html = "Acceso a producto: %i" % numero;
	return HttpResponse(html)
