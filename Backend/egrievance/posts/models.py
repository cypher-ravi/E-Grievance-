from django.db import models
from django.core.validators import FileExtensionValidator
from  profiles.models import Profile
from django.urls import reverse
# Create your models here.

class Space(models.Model):
    '''
    Space can be refer as a category of posts/complaints
    '''
    CATEGORY_CHOICES = (
        ('Government','Government'),
        ('Private','Private'),
    )
    name = models.CharField(max_length=50,unique=True)
    category = models.CharField(choices=CATEGORY_CHOICES, max_length=50)
    

    class Meta:
        verbose_name = ("Space")
        verbose_name_plural = ("Spaces")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Space_detail", kwargs={"pk": self.pk})

class Post(models.Model):
    space = models.ForeignKey(Space, on_delete=models.CASCADE,blank=True, null=True)
    content = models.TextField()
    image = models.ImageField(upload_to='posts',validators=[FileExtensionValidator(['png','jpg','jpeg'])],blank=True)
    liked = models.ManyToManyField(Profile, default='',blank=True,related_name='likes')
    answers = models.ManyToManyField('Answer', default='',blank=True,related_name='answers')
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='posts',blank=True, null=True)
   
    def __str__(self):
        return str(self.content[:20])

    def num_likes(self):
        return self.liked.all().count()

    def num_comments(self):
        return self.comment_set.all().count()
    
   
    def get_all_comments(self):
        return Comment.objects.filter(post=self)

    
    class Meta:
        ordering = ('-created',)

class Answer(models.Model):
    question = models.ForeignKey(Post,on_delete=models.CASCADE)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='answers',blank=True, null=True)
    content = models.TextField()
    image = models.ImageField(upload_to='posts',validators=[FileExtensionValidator(['png','jpg','jpeg'])],blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    

    class Meta:
        verbose_name = ("Answer")
        verbose_name_plural = ("Answers")

    def __str__(self):
        return f'{self.question.content} answer is {self.content}'

    def get_absolute_url(self):
        return reverse("Answer_detail", kwargs={"pk": self.pk})


class Comment(models.Model):
    user = models.ForeignKey(Profile,on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    body = models.TextField(max_length=300)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.user.username}-commented on-{self.post}'


class Like(models.Model):
    LIKE_CHOICES = (
        ('Like','Like'),
        ('Unlike','Unlike'),
    )
    user = models.ForeignKey(Profile,on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    value = models.CharField(max_length=8,choices=LIKE_CHOICES,blank=True,null=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}-{self.post}-{self.value}"