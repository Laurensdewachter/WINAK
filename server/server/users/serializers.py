from django.contrib.auth import password_validation
from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    password = serializers.CharField(
        max_length=100,
        write_only=True,
        validators=[password_validation.validate_password],
    )
    first_name = serializers.CharField(max_length=100)
    last_name = serializers.CharField(max_length=100)

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
