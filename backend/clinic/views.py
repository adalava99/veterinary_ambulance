import json
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from .models import *

# Create your views here.

def return_owners(request):
    owners = Owners.objects.all()
    serialized_owners=[]
    for o in owners:
        serialized_owners.append(
            {
                "id" : o.id,
                'name' : o.name,
                "phone" : o.phone
            }
        )
    return JsonResponse(serialized_owners, safe = False)

def pets_by_owner(request, owner_id):
    owner = get_object_or_404(Owners, pk=owner_id)
    serialized_pets=[]
    pets= Pets.objects.filter(owner=owner)
    for p in pets:
        serialized_pets.append(
            {
                "id" : p.id,
                'name' : p.name,
                "species" : p.species,
                "age": p.age
            }
        )
    return JsonResponse({
        "owner_id": owner_id,
        "owner_name": owner.name,
        "owner_phone": owner.phone,
        "pets": serialized_pets
    })

def create_owner(request):
    if request.method == 'POST':
        data= json.loads(request.body)

        owner = Owners.objects.create(
            name = data['name'],
            phone = data['phone']
        )
    return JsonResponse({
        'message' : 'Owner created successfully.',
        "id" : owner.id
    })