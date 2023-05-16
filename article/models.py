from django.conf import settings
from django.db import models
class Article(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    author = models.ForeignKey("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="article_author",)

# Create your models here.
