from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Post




class CreatePostSerializer(serializers.ModelSerializer):
    """
    Serializer used to create a post 
    """
   
    class Meta:
        model = Post
        fields = ('post_type','space', 'content', 'image','author')
