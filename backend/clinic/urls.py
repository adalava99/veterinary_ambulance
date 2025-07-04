from django.urls import include, path
from .views import *

urlpatterns = [
    #Owners
    #GET
    path('get-owners', return_owners),
    path('owners/<int:owner_id>/pets', pets_by_owner),
    #POST
    path('owners/create', create_owner),
    #DELETE
    path('owners/delete/<int:owner_id>', delete_owner),
    #PATCH
    path('owners/update/<int:owner_id>', update_owner),

    #Pets
    path('pets/create', create_pet),
    #DELETE
    path('pets/delete/<int:pet_id>', delete_pet),
    #PATCH
    path('pets/update/<int:pet_id>', update_pet)
]