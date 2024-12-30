from django.contrib.auth.models import User
from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    study = serializers.CharField(max_length=1)

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
