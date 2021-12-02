from django.urls import path
from django.conf.urls import include
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from userAuth import views

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('register/', views.UserCreateView.as_view()),
    path('verifyToken/', views.VerifyTokenView.as_view()),
    path('user/<int:pk>/', views.UserDetailView.as_view()),
    path('users/', include('userAuth.views.url_user')),
]
