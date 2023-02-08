from django.conf import settings
from django.db import models
class Article(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    author = models.ForeignKey("users.User",on_delete=models.CASCADE,null=True,blank=True,related_name="article_author",)

# Create your models here.
