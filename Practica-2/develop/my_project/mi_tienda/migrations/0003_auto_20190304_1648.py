# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2019-03-04 16:48
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0002_product2'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Product',
            new_name='Calcetine',
        ),
        migrations.RenameModel(
            old_name='Product2',
            new_name='Camiseta',
        ),
    ]