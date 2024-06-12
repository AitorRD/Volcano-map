from django.db import models
from django.contrib.auth.models import User

class Volcano(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    coordinates = models.CharField(max_length=50)
    height = models.FloatField()
    eruption_time = models.DateTimeField()

    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
