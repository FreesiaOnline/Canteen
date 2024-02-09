from .models import User
from rest_framework import serializers
from django.core.exceptions import ValidationError
import requests

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email = validated_data['email'],
            password = validated_data['password']
        )
        return user

    def validate_username(self, value):
        print(value)

        url = f'https://api.mojang.com/users/profiles/minecraft/{value}'
        response = requests.get(url)
        if response.json().get('id'):
            return value
        else:
            raise ValidationError("Username must contain minecraft nickname")