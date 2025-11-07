from django.db import models
from django.utils import timezone
from users.models import Business

class IntelligenceReport(models.Model):
    """
    Stores AI-generated insights & raw/cleaned inputs used.
    """
    business = models.ForeignKey(Business, on_delete=models.CASCADE, related_name="intelligence_reports")
    input_data = models.JSONField(blank=True, null=True)          # payload fed to agents
    output_data = models.JSONField(blank=True, null=True)         # agent result (BI, campaigns, etc.)
    status = models.CharField(max_length=20, default="pending")   # pending|running|success|error
    error_message = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"Report for {self.business.name} ({self.status})"
