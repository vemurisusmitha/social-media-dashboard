from django.db import models

class SocialMediaPost(models.Model):
    platform = models.CharField(max_length=50)
    content = models.TextField()
    likes = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.platform} Post - {self.date_posted}'
