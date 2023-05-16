
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Article2ViewSet
router = DefaultRouter()
router.register('article2', Article2ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
