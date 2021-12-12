from rest_framework import serializers
from userAuth.models.user import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','fullname','password','email','edad','cc','tel','root']

    def create(self, validated_data):
        userInstance = User.objects.create(**validated_data)
        return userInstance

    def to_representation(self, obj):
        user = User.objects.get(id=obj.id)
        return {
            'id': user.id,
            'username': user.username,
            'fullname': user.fullname,
            'Mail': user.email,
            'Edad': user.edad,
            'DocIdentidad': user.cc,
            'Telefono': user.tel,
            'Doctor': user.root
        }