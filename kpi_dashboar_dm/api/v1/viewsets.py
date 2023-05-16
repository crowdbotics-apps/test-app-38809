from rest_framework import authentication
from kpi_dashboar_dm.models import Article2
from .serializers import Article2Serializer
from rest_framework import viewsets

class Article2ViewSet(viewsets.ModelViewSet):
    serializer_class = Article2Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Article2.objects.all()