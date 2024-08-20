from django.urls import path

from users import views

urlpatterns = [
    path("csrf", views.CSRF.as_view()),
    path("register", views.Register.as_view()),
]
