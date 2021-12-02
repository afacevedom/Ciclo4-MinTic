from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.contrib.auth.hashers import make_password

class UserManager(BaseUserManager):
    def create_user(self, username, password=None):
        if not username:
            raise ValueError("Se debe ingresar un nick")
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password):
        user = self.create_user(
            username=username,
            password=password,
        )
        user.is_admin = True
        user.save(using = self.db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField('username', max_length=25, unique=True) #Username
    password = models.CharField('Password', max_length=265) #Contraseña
    email = models.EmailField('Mail', max_length=200, unique=True) #Mail
    edad = models.IntegerField(default=0) #Edad
    cc = models.CharField('Doc', max_length=60, unique=True) #Doc Identidad
    tel = models.CharField('Tel', max_length=12) #Tel
    root = models.BooleanField(default=False)

    def save(self, **kwargs):
        hashing = 'mUosa029Drso4wpI6mxN90'
        self.password = make_password(self.password, hashing)
        super().save(**kwargs)

    objects = UserManager()
    USERNAME_FIELD = 'username'