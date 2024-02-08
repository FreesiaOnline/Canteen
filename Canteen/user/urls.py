from user.views import RegisterAPIView
from django.urls import path

urlpatterns = [
    path("register/", RegisterAPIView.as_view()),
]