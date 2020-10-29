from rest_framework import serializers
from .models import Score
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'username')
        model = get_user_model()

# Serializer for creating new scores


class ScoreSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('player', 'points', 'created_at', 'id')
        model = Score


# Serializer with nested user data
class ScoreReadSerializer(serializers.ModelSerializer):

    player = UserSerializer(read_only=True)

    class Meta:
        fields = ('player', 'points', 'created_at', 'id')
        model = Score
