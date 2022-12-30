from rest_framework import serializers
from django.contrib.auth.models import User
from profiles.serializers import ProfileSerializer
from .models import Post,Answer,Space


class AnswerSerializer(serializers.ModelSerializer):
    """
    Serializer used to create a post 
    """

    author = ProfileSerializer(read_only=True)
    class Meta:
        model = Answer
        fields = ('id','question','content', 'image','author','created')

class SingleQuestionAnswerSerializer(serializers.ModelSerializer):
    """
    Serializer used to create a post 
    """

    # author = ProfileSerializer(read_only=True)
    class Meta:
        model = Answer
        fields = ('question')

class PostSerializer(serializers.ModelSerializer):
    """
    Serializer used to create a post 
    """
    answers = AnswerSerializer(many=True,read_only=True)
    author = ProfileSerializer(read_only=True)
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

