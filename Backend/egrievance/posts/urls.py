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
    path('list-all-answers/<int:question>/',ListAnswersView.as_view(),name='list-all-answers'),
    path('like-post/',CreateLikeView.as_view(),name='like-post'),
    path('comment-post/',CreateCommentView.as_view(),name='comment-post'),
    path('list-all-answers-via-space/<int:space>/',ListAnswersViewViaSpace.as_view(),name='list-all-answers'),
    path('list-all-comments-via-post/<int:post_id>/',ListCommentsViewViaPOST.as_view(),name='list-all-comments-via-post'),
]