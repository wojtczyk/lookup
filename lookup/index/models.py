from django.db import models

# Create your models here.
class Index(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    keywords = models.TextField()
    cid = models.CharField(max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Indexes"