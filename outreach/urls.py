from django.urls import path

from outreach import views

app_name = 'outreach'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]
