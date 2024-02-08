from user.views import RegisterAPIView, AuthAPIView
from django.urls import path

urlpatterns = [
    path("register/", RegisterAPIView.as_view()),
    path("auth/", AuthAPIView.as_view()),
]