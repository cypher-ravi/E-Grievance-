from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django.dispatch import  receiver
from .models import Post,Answer


@receiver(post_save,sender=Answer)
def post_save_add_answer_to_question(sender, instance, created, **kwargs):
    if created:
        question = Post.objects.filter(id=instance.question.id).first()
        question.answers.add(instance)

        question.save()


    
        
