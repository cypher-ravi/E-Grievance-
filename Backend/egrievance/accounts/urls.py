
from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views

app_name = 'accounts'

urlpatterns = [    
    path('register/',RegisterUserView.as_view(),name='user-registration'),
    path('login/',LoginView.as_view(),name='user-login'),
    path('logout/',logoutView,name='user-logout'),
    path('get-user/',get_user,name='get-user'),
]