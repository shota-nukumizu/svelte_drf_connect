from django.db import models


class MemoModel(models.Model):
    title = models.CharField(max_length=70)
    content = models.TextField()

    def __str__(self) -> str:
        return self.title