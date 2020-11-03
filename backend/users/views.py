from rest_framework import generics, permissions, status
from .serializers import UserSerializer
from .permissions import IsCurrentUser
from django.contrib.auth import get_user_model


class CurrentUserDetail(generics.RetrieveUpdateAPIView):
    permission_classes = (IsCurrentUser, )
    model = get_user_model()
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        pk = self.kwargs.get('pk')

        if pk == "current":
            return self.request.user

        return super(CurrentUserDetail, self).get_object()
