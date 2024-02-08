from django.urls import re_path as url
from django.urls import include
from rest_framework import routers
from user import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'group', views.GroupViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]