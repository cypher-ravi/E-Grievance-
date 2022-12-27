from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class LoginSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = ('email', 'password',)


class RegisterUserSerializer(serializers.ModelSerializer):
    """
    Serializer used to register a user and 
    validate both password fields for matching.
    """
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password_2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username','email', 'password', 'password_2',)
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, attrs):
        if attrs['password'] != attrs['password_2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        print(user)
        return user