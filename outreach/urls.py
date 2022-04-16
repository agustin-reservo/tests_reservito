from django.urls import path

from outreach import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
