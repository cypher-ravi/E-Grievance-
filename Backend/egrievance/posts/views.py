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
from rest_framework import status
from rest_framework.views import APIView

from django.contrib.auth.models import User
from .serializers import *

from .models import Post,Space,Answer
from profiles.models import Profile

class CreatePostView(generics.CreateAPIView):
    """
    create a post
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = User.objects.filter(username=request.data['user']).first()
        # if user:
            # space = Space.objects.filter(id=request.data['space']).first()
            # author = Profile.objects.filter(id=request.data['author']).first()
        post = Post.objects.create(content=request.data['content'], author=user)
        return Response({"message":"Question Added Successfully"},status=status.HTTP_201_CREATED)
       
        # else:
        #     return Response({"register":False})

class CreateAnswerView(generics.CreateAPIView):
    """
    create a post
    """
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user  = request.user
        question = Post.objects.filter(id=request.data['question']).first()
        if question:
            # space = Space.objects.filter(id=request.data['space']).first()
            # author = Profile.objects.filter(id=request.data['author']).first()
            answer = Answer.objects.create(question=question,content=request.data['content'])
            return Response({"message":"Answer Added Successfully"},status=status.HTTP_201_CREATED)
        else:
            return Response({"error":"Question not found!"},status=status.HTTP_404_NOT_FOUND)


class ListPostView(generics.ListAPIView):
    """
    list all questions and answers
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # permission_classes = [IsAuthenticated,]



class ListSpacesView(generics.ListAPIView):
    """
    list all spaces
    """
    queryset = Space.objects.all()
    serializer_class = SpaceSerializer