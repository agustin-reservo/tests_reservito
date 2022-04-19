from django.urls import path
from django.contrib.auth.views import LoginView
from core import views

app_name = 'core'

urlpatterns = [
    path('usuarios/login', LoginView.as_view(), name='login'),
    path('usuarios/register', views.UserRegisterView.as_view(), name='register'),
    path('agendas/', views.ver_agenda, name='schedule'),
]
