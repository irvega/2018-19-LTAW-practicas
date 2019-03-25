# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Camiseta, Calcetine, Zapatilla

# Importar clase primero desde terminal: 1)python manage.py makemigration 2)python manage.py migrate
# User: ivega // c: django

# Register your models here.
admin.site.register(Camiseta)
admin.site.register(Calcetine)
admin.site.register(Zapatilla)
