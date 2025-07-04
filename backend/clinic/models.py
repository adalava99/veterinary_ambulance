from django.db import models

# Create your models here.
class Owners(models.Model):
    id = models.BigAutoField(primary_key = True, null = False)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)

    class Meta:
        db_table = "owners"
        managed = False

class Pets(models.Model):
    id = models.BigAutoField(primary_key = True, null = False)
    name = models.CharField(max_length=255)
    species= models.CharField(max_length=255)
    age = models.SmallIntegerField()
    owner = models.ForeignKey(Owners, models.CASCADE, null= False, blank=True )

    class Meta:
        db_table = "pets"
        managed = False

class Vets(models.Model):
    name = models.CharField(max_length=255)
    specialization = models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        db_table = "vets"
        managed = False


class Appointments(models.Model):
    date = models.DateTimeField(null=True, blank=True)
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)
    vet = models.ForeignKey(Vets, on_delete=models.SET_NULL, null=True, blank=True)
    class Meta:
        db_table = "appointments"
        managed = False


class Vaccines(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    class Meta:
        db_table = "vaccines"
        managed = False



class PetVaccines(models.Model):
    pet = models.ForeignKey(Pets, on_delete=models.CASCADE)
    vaccine = models.ForeignKey(Vaccines, on_delete=models.CASCADE)
    time_of_vaccination = models.DateTimeField(null=True, blank=True)
    class Meta:
        db_table = "pet_vaccines"
        managed = False
