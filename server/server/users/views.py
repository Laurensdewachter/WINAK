from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from users.serializers import UserSerializer


@method_decorator(csrf_protect, name="dispatch")
class Register(APIView):
    permission_classes = [AllowAny]

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


@method_decorator(ensure_csrf_cookie, name="dispatch")
class CSRF(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return JsonResponse({"message": "CSRF cookie set"})
