from django.contrib import admin
from django.urls import path,include
from .views import *
from django.contrib.auth import views as auth_views

app_name = 'posts'

urlpatterns = [    
    path('create-post/',CreatePostView.as_view(),name='create-post'),
    path('create-answer/',CreateAnswerView.as_view(),name='create-answer'),
    path('list-post/',ListPostView.as_view(),name='list-post'),
    path('list-spaces/',ListSpacesView.as_view(),name='list-spacces'),
]