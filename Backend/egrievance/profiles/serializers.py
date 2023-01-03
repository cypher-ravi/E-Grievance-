from rest_framework import serializers
from django.contrib.auth.models import User
from accounts.serializers import UserSerializer
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    """
    Serializer used to create a post 
    """
    user = UserSerializer(read_only=True)
   
    class Meta:
        model = Profile
        fields = ('user',)