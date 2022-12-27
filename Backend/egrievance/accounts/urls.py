from django.contrib import admin
from django.urls import path,include
from .views import *
from django.contrib.auth import views as auth_views

app_name = 'accounts'

urlpatterns = [    
    path('register/',RegisterUserView.as_view(),name='user-registration'),
    path('login/',LoginView.as_view(),name='user-login'),
    path('logout/',logoutView,name='user-logout'),
]