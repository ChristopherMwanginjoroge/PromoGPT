from django.contrib import admin
from .models import IntelligenceReport

# @admin.register(IntelligenceReport)
# class IntelligenceReportAdmin(admin.ModelAdmin):

#     list_display = ("business", "status", "created_at", "updated_at")
#     list_filter = ("status",)
#     search_fields = ("business__name",)

from rest_framework import serializers
from .models import IntelligenceReport

class IntelligenceReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = IntelligenceReport
        fields = '__all__'
