from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
import os
import openai


def test_ai(request):

    openai.organization = "org-wr5H8Bi7AkG3hiLjVGdzywNE"
    openai.api_key = "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"
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt="Say this is a test",
    max_tokens=7,
    temperature=0
    )

    print(response['choices'])
    return HttpResponse(response['choices'])

