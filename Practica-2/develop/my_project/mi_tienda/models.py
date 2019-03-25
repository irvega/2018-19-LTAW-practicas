from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Camiseta (models.Model):
    name = models.CharField(max_length=200)
    img = models.CharField(max_length=400)
    stock = models.IntegerField()
    price = models.FloatField()
    def __str__(self):
        return self.name

class Calcetine (models.Model):
    name = models.CharField(max_length=200)
    img = models.CharField(max_length=400)
    stock = models.IntegerField()
    price = models.FloatField()
    def __str__(self):
        return self.name

class Zapatilla (models.Model):
    name = models.CharField(max_length=200)
    img = models.CharField(max_length=400)
    stock = models.IntegerField()
    price = models.FloatField()
    def __str__(self):
        return self.name
