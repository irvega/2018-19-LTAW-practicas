# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2019-03-04 17:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0003_auto_20190304_1648'),
    ]

    operations = [
        migrations.AddField(
            model_name='camiseta',
            name='img',
            field=models.CharField(default=1, max_length=400),
            preserve_default=False,
        ),
    ]
