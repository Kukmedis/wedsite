from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

def index(request):
    return render(request, 'wedinvite/index.html', {})

def place(request):
    return render(request, 'wedinvite/place.html', {})

def photos(request):
    return render(request, 'wedinvite/photos.html', {})
# Create your views here.
