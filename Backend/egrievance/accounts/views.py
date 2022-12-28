from django.shortcuts import render

# Create your views here.
import requests
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password
from django.shortcuts import render
from rest_framework import serializers
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from django.contrib.auth.models import User
from .serializers import *



@api_view(['GET'])
def index(request):
    return Response('ok',status=status.HTTP_200_OK)


class RegisterUserView(generics.GenericAPIView):
    """
    Register a user required fields username,email,password ,password_2 
    """
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        user = User.objects.filter(username=request.data['username']).first()
        if user is None:
            if request.data['username']:
                if request.data['password'] != request.data['password_2']:
                    return Response({"password": "Password fields didn't match."})
                user = User.objects.create(username=request.data['username'],email=request.data['email'])
                user.set_password(request.data['password'])
                user.save()
                return Response({"username":user.username})
            return Response({"username":"enter username"})
        else:
            return Response({"user with this name already exists":True})


class LoginView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
       
        user = User.objects.filter(username=request.data['username']).first()
        if user is not None:
            if user.check_password(request.data['password']) is True:
                login(request, user)
                return Response({'logged_in':True,'user':user.id},status.HTTP_200_OK)
          
            return Response({'status':'password not valid'})
        else:
            return Response({'detail':'user not exists'},status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def logoutView(request):
    logout(request)
    return Response({'logged_out':True})


@api_view(['GET'])
def get_user(request):
    return Response({'user':request.user.id})