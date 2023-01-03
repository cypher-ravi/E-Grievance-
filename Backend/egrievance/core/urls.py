from django.contrib import admin
from django.urls import path,include
from .views import *
from django.contrib.auth import views as auth_views

app_name = 'core'

urlpatterns = [    
    path('test-ai/',test_ai,name='test-ai'),
   
]