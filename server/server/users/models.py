from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    STUDIES = [
        ("W", "Wiskunde"),
        ("I", "Informatica"),
        ("F", "Fysica"),
        ("A", "Andere"),
    ]
    study = models.CharField(max_length=1, choices=STUDIES)
    email = models.EmailField(unique=True)
