# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Camiseta, Calcetine
from . import models

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

def prod1 (request):
    objects = Calcetine.objects.all()
    html = "<p>Listado de calcetines: </p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '<p>'
    return HttpResponse(html)

def prod2 (request):
    objects = Camiseta.objects.all()
    html = "<p>Listado de camisetas: </p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '€' + '<p>'
    return HttpResponse(html)

def carrito (request):
    return render(request, "carrito.html", {})
