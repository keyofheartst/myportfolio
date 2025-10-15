from django.db import models

class News(models.Model):
    title = models.CharField(max_length=255)
    url = models.URLField()
    description = models.TextField(blank=True, null=True)
    published_at = models.DateTimeField()
    source = models.CharField(max_length=50, default="dev.to")

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title
