from django.db import models
from business_data.models import Business

class IntelligenceReport(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE)
    status = models.CharField(max_length=50, default="pending")
    output_data = models.JSONField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.business.name} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
