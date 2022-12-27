from django.contrib import admin
from django.urls import path,include
from .views import *
from django.contrib.auth import views as auth_views

app_name = 'posts'

urlpatterns = [    
    path('create-post/',CreatePostView.as_view(),name='create-post'),
]