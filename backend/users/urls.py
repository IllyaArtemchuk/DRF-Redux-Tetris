from django.urls import path
from .views import CurrentUserDetail

urlpatterns = [
    path('<pk>/', CurrentUserDetail.as_view())
]
