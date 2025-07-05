from rest_framework import serializers
from .models import *

class OwnersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owners
        fields = ['id', 'name', 'phone']

class PetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pets
        fields = ['id','name', 'species', 'age', 'owner']

class VetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vets
        fields = '__all__'

class AppointmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointments
        fields = '__all__'

class VaccinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vaccines
        fields = '__all__'

class PetVaccinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetVaccines
        fields = '__all__'