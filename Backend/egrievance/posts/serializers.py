from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Post,Answer,Space


class AnswerSerializer(serializers.ModelSerializer):
    """
    Serializer used to create a post 
    """
   
    class Meta:
        model = Answer
        fields = ('id','question','content', 'image','author','created')

class PostSerializer(serializers.ModelSerializer):
    """
    Serializer used to create a post 
    """
    answers = AnswerSerializer(many=True,read_only=True)
    class Meta:
        model = Post
        fields = ('id','space', 'content', 'image','author','created','answers')
    
class SpaceSerializer(serializers.ModelSerializer):
    """
    Serializer used to serialize all spaces
    """

    class Meta:
        model = Space
        fields = '__all__'

