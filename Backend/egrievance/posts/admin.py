from django.contrib import admin
from .models import Post,Space,Like,Comment,Answer,Like,Comment
# Register your models here.
admin.site.register(Post)
admin.site.register(Space)
admin.site.register(Answer)
admin.site.register(Like)
admin.site.register(Comment)
