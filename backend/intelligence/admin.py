from django.contrib import admin
from .models import IntelligenceReport

@admin.register(IntelligenceReport)
class IntelligenceReportAdmin(admin.ModelAdmin):
    list_display = ("business", "status", "created_at")
    search_fields = ("business__name",)
    list_filter = ("status", "created_at")
