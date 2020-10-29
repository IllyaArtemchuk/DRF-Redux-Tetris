from django.urls import path
from .views import ScoresList, ScoresUserList, ScoreDelete

urlpatterns = [
    path('delete/<int:pk>/', ScoreDelete.as_view()),
    path('<int:userID>/', ScoresUserList.as_view()),
    path('', ScoresList.as_view()),
]
