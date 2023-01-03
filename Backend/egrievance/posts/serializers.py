from rest_framework import serializers
from django.contrib.auth.models import User
from profiles.serializers import ProfileSerializer
from .models import Post,Answer,Space,Like,Comment


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
    likes = serializers.SerializerMethodField('get_all_likes')
    comments_count = serializers.SerializerMethodField('get_all_nums_comments')
    
    class Meta:
        model = Post
        fields = ('id','space', 'content', 'image','author','created','answers','likes',"comments_count")


    def get_all_likes(self,obj):
        return obj.num_likes()


    def get_all_nums_comments(self,obj):
        return obj.num_comments()

class SpaceSerializer(serializers.ModelSerializer):
    """
    Serializer used to serialize all spaces
    """

    class Meta:
        model = Space
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    """
    Serializer used to serialize all likes
    """

    class Meta:
        model = Like
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    """
    Serializer used to serialize all comments
    """
    user = ProfileSerializer(read_only=True)
    class Meta:
        model = Comment
        fields = '__all__'