from user.views import RegisterAPIView, AuthAPIView
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("register/", RegisterAPIView.as_view()),
    path("auth/", AuthAPIView.as_view()),
    path("refresh/", TokenRefreshView.as_view()),
]