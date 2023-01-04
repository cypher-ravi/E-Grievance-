from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
import os
import openai

openai.organization = "org-wr5H8Bi7AkG3hiLjVGdzywNE"
openai.api_key = "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"

def get_recommended_answers(question,propmt):

    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=propmt + question,
    max_tokens=20,
    temperature=0
    )

    choices = response['choices']
    print(choices[0])
    answer = choices[0]
    return answer['text']