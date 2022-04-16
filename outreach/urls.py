from django.urls import path

from outreach import views

urlpatterns = [
    path('', views.index, name='index'),
]
