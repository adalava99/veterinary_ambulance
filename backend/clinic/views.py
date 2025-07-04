import json
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import *

# Create your views here.

#Owners
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
            "id" : owner.id,
            "name" : owner.name,
            "phone" : owner.phone
        })
    else:
        return HttpResponse('Incorrect method.', status = 405)
    
def delete_owner(request, owner_id):
    if request.method == 'DELETE':
        owner = get_object_or_404(Owners, pk= owner_id)
        owner.delete()
        return HttpResponse(f'Owner with id {owner_id} was deleted.',status=200)
    else:
        return HttpResponse('Incorrect method.', status = 405)
    
def update_owner(request, owner_id):
    if request.method == 'PATCH':
        owner = get_object_or_404(Owners, pk = owner_id)
        data = json.loads(request.body)
        if(data.get('name')):
            owner.name = data['name']
        if(data.get('phone')):
            owner.phone = data['phone']
        owner.save()
        return JsonResponse({
            "id" : owner.id,
            "name" : owner.name,
            "phone" : owner.phone
        })
    else:
        return HttpResponse('Incorrect method.', status = 405)

#Pets

def create_pet(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            owner = Owners.objects.get(pk=data.get('owner_id'))
        except Owners.DoesNotExist:
            return JsonResponse(
                {'error': 'Owner not found'},
                status=404
            )
        pet = Pets.objects.create(
            name = data['name'],
            species = data.get('species','No species provided'),
            age = data.get('age', 'No age provided.'),
            owner_id = data.get('owner_id')
        )
        return JsonResponse({
            "id" : pet.id,
            "name" : pet.name,
            "species": pet.species,
            "age" : pet.age,
            "owner_id" : pet.owner_id
        })
    else:
        return HttpResponse('Incorrect method.', status = 405)

def delete_pet(request, pet_id):
    if request.method == 'DELETE':
        pet = get_object_or_404(Owners, pk= pet_id)
        pet.delete()
        return HttpResponse(f'Pet with id {pet_id} was deleted.',status=200)
    else:
        return HttpResponse('Incorrect method.', status = 405)
    
def update_pet(request, pet_id):
    if request.method == 'PATCH':
        pet = get_object_or_404(Pets, pk = pet_id)
        data = json.loads(request.body)
        if(data.get('name')):
            pet.name = data['name']
        if(data.get('species')):
            pet.species = data['species']
        if(data.get('age')):
            pet.age = data['age']
        if('owner_id' in data):
            pet.owner_id = data['owner_id']
        pet.save()
        return JsonResponse({
            "id" : pet.id,
            "name" : pet.name,
            "species" : pet.species,
            "age" : pet.age,
            "owner_id" : pet.owner.id 
        })
    else:
        return HttpResponse('Incorrect method.', status = 405)
