from django.conf.urls import url
from django.urls.conf import path
from .userAllView import users_api


urlpatterns = [
    path('', users_api),
]