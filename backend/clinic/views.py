import json
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import *
from .serializers import *
from rest_framework import viewsets

# Create your views here.

#Owners
class OwnersViewSet(viewsets.ModelViewSet):
    queryset = Owners.objects.all()
    serializer_class = OwnersSerializer

class PetsViewSet(viewsets.ModelViewSet):
    queryset = Pets.objects.all()
    serializer_class = PetsSerializer