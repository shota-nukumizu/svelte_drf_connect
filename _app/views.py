from rest_framework import generics
from rest_framework.response import Response

from .models import MemoModel
from .serializers import MemoModelSerializer


class MemoList(generics.ListCreateAPIView):
    queryset = MemoModel.objects.all().order_by('-id')
    serializer_class = MemoModelSerializer