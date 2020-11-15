from rest_framework import generics, permissions, status
from .models import Score
from .serializers import ScoreSerializer, ScoreReadSerializer
from .permissions import IsPlayerOrReadOnly, IsPlayer
from rest_framework.response import Response


class ScoresList(generics.ListCreateAPIView):

    permission_classes = (IsPlayerOrReadOnly, )
    queryset = Score.objects.all().order_by('-points')

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ScoreReadSerializer
        return ScoreSerializer

    def perform_create(self, serializer, **kwargs):
        kwargs['player'] = self.request.user
        print(self.request.user)
        serializer.save(**kwargs)


class ScoreDelete(generics.DestroyAPIView):
    permission_classes = (IsPlayer, )
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer


class ScoresUserList(generics.ListAPIView):
    serializer_class = ScoreSerializer

    def get_queryset(self):
        userID = self.kwargs['userID']
        return Score.objects.filter(player__id=userID).order_by('-points')
