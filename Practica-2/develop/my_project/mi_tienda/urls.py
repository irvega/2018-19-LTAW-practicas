from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^carrito/', views.carrito),
    url(r'^calcetines/', views.prod1),
    url(r'^camisetas/', views.prod2),
    url(r'^zapatillas/', views.prod3)
]
