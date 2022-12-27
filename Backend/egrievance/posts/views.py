from django.shortcuts import render

# Create your views here.
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

from .models import Post,Space
from profiles.models import Profile

class CreatePostView(generics.GenericAPIView):
    """
    create a post
    """
    queryset = Post.objects.all()
    serializer_class = CreatePostSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = User.objects.filter(username=self.request.user).first()
        if user:
            space = Space.objects.filter(id=request.data['space']).first()
            author = Profile.objects.filter(id=request.data['author']).first()
            post = Post.objects.create(post_type=request.data['post_type'],space=space,content=request.data['content'],author=author)
            return Response({"post":post.id})
       
        else:
            return Response({"register":False})