from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from users.serializers import UserSerializer


class Register(APIView):
    @csrf_exempt
    def post(self, request):
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            try:
                serializer.save()
            except Exception as e:
                return JsonResponse({"error": str(e)}, status=400)
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
