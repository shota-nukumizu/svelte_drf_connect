from rest_framework import serializers
from .models import MemoModel

class MemoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemoModel
        fields = '__all__'