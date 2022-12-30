

from django.db.models.signals import post_save,pre_save,pre_delete


# from .models import ProfileDetail
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Profile



@receiver(post_save,sender=User)
def post_save_create_personal_detail(sender,instance,created, **kwargs):
    if created:
        profile = Profile.objects.create(user=instance,first_name=instance.username)
       
                
    