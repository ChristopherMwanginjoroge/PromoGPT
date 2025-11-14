from rest_framework import serializers
from .models import IntelligenceReport

class IntelligenceReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = IntelligenceReport
        fields = "__all__"
