from rest_framework import serializers
from kpi_dashboar_dm.models import Article2

class Article2Serializer(serializers.ModelSerializer):

    class Meta:
        model = Article2
        fields = "__all__"