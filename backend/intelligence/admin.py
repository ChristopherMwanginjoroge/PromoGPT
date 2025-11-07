from django.contrib import admin
from .models import IntelligenceReport

@admin.register(IntelligenceReport)
class IntelligenceReportAdmin(admin.ModelAdmin):
    list_display = ("business", "status", "created_at", "updated_at")
    list_filter = ("status",)
    search_fields = ("business__name",)
