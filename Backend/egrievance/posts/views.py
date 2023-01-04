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
from rest_framework.authentication import SessionAuthentication, BasicAuthentication,TokenAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication,JWTTokenUserAuthentication
from django.contrib.auth.models import User
from .serializers import *
from rest_framework import filters
from .utils import get_recommended_answers


from .models import Post,Space,Answer,Like,Comment
from profiles.models import Profile

class CreatePostView(generics.CreateAPIView):
    """
    create a post
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]

    def post(self, request, *args, **kwargs):
        user = User.objects.filter(username=request.data['user']).first()
        profile = Profile.objects.filter(user=user).first()
        # if user:
        space = Space.objects.filter(id=request.data['space']).first()
        answer = get_recommended_answers(request.data['content'],space.prompts)
            # author = Profile.objects.filter(id=request.data['author']).first()
        post = Post.objects.create(content=request.data['content'], author=profile,space=space)

        Answer.objects.create(question=post,content=answer,author=profile)
        return Response({"message":"Question Added Successfully"},status=status.HTTP_201_CREATED)
       

class CreateAnswerView(generics.CreateAPIView):
    """
    create a post
    """
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]

    def post(self, request, *args, **kwargs):
       
        question = Post.objects.filter(id=request.data['question']).first()
        user = User.objects.filter(username=request.data['user']).first()
        profile = Profile.objects.filter(user=user).first()
        if question:
            # space = Space.objects.filter(id=request.data['space']).first()
            # author = Profile.objects.filter(id=request.data['author']).first()
            answer = Answer.objects.create(question=question,content=request.data['content'],author=profile)
            return Response({"message":"Answer Added Successfully"},status=status.HTTP_201_CREATED)
        else:
            return Response({"error":"Question not found!"},status=status.HTTP_404_NOT_FOUND)


class ListPostView(generics.ListAPIView):
    """
    list all questions and answers
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated,]
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]
    filter_backends = [filters.SearchFilter]
    search_fields = ['content',]
    # filterset_fields = ['content', 'space__name','answers__content']



class ListSpacesView(generics.ListAPIView):
    """
    list all spaces
    """
    queryset = Space.objects.all()
    serializer_class = SpaceSerializer


class ListAnswersView(generics.GenericAPIView):
    """
    list all anaswer using question id
    """
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated,]
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]


    def get(self,request,*args,**kwargs):
        question = Post.objects.filter(id=self.kwargs['question']).first()
        answers = Answer.objects.filter(question=question)
        serialized_answers = AnswerSerializer(answers,many=True)
        return Response({'results':serialized_answers.data})


class ListAnswersViewViaSpace(generics.GenericAPIView):
    """
    list all anaswer using space aka categories
    """
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated,]
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]


    def get(self,request,*args,**kwargs):
        question = Post.objects.filter(space__id=self.kwargs['space']).first()
        answers = Answer.objects.filter(question=question)
        serialized_answers = AnswerSerializer(answers,many=True)
        return Response({'results':serialized_answers.data})

class ListCommentsViewViaPOST(generics.GenericAPIView):
    """
    list all comments using post 
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated,]
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]


    def get(self,request,*args,**kwargs):
        post = Post.objects.filter(id=self.kwargs['post_id']).first()
        comments = post.get_all_comments()
        serialized_comments = CommentSerializer(comments,many=True)
        return Response({'results':serialized_comments.data})

class CreateLikeView(generics.CreateAPIView):
    """
    create a post
    """
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]

    def post(self, request, *args, **kwargs):
       
        user = User.objects.filter(username=request.data['user']).first()
    
        post = Post.objects.filter(id=request.data['post']).first()
        print(user)
        profile = Profile.objects.filter(user=user).first()

        if profile in post.liked.all():
            post.liked.remove(profile)
        else:
            post.liked.add(profile)

        like, created = Like.objects.get_or_create(user=profile,post=post)

        if not created:
            if like.value == 'Like':
                like.value = 'Unlike'
            else:
                like.value = 'Like'
        else:
            like.value = 'Like'
            
        post.save()
        like.save()
        return Response({"likes":post.num_likes()},status=status.HTTP_200_OK)
        # else:
        #     return Response({"error":"Question not found!"},status=status.HTTP_404_NOT_FOUND)


class CreateCommentView(generics.CreateAPIView):
    """
    create a comment and add it to a post
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = [SessionAuthentication, BasicAuthentication,TokenAuthentication,JWTAuthentication]



    def post(self, request, *args, **kwargs):
        
        body = request.data['body']

        user = User.objects.filter(username=request.data['user']).first()

        post = Post.objects.filter(id=request.data['post']).first()
        print(user)
        profile = Profile.objects.filter(user=user).first()
    
        comment = Comment.objects.create(user=profile,post=post,body=body)
        return Response({"comment_count":post.num_comments()},status=status.HTTP_201_CREATED)
        # else:
        #     return Response({"error":"Question not found!"},status=status.HTTP_404_NOT_FOUND)


