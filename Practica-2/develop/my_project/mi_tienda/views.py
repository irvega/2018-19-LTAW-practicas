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
    return render(request, "products.html", {'products' : objects})

def prod2 (request):
    objects = Camiseta.objects.all()
    return render(request, "products.html", {'products' : objects})

def carrito (request):
    return render(request, "carrito.html", {})
