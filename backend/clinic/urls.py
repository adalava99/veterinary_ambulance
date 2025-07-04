from django.urls import include, path
from .views import *

urlpatterns = [
    #GET
    path('get-owners', return_owners),
    path('owners/<int:owner_id>/pets', pets_by_owner),

    #POST
    path('owners/create', create_owner),
]