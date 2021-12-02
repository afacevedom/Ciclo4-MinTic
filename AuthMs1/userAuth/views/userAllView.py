from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from userAuth.serializers.userSerializer import UserSerializer
from userAuth.models.user import User

@api_view(['GET'])

def users_api(request):
    if request.method == 'GET':
        users = User.objects.all()
        user_serializer = UserSerializer(users, many=True)
        return Response(user_serializer.data, status=status.HTTP_200_OK)