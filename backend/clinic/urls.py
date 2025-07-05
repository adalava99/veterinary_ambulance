from django.urls import include, path
from .views import *
from rest_framework import routers

'''
router = routers.DefaultRouter()
router.register('owner', OwnersViewSet)
router.register('pets', PetsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
'''

owners_list = OwnersViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

owners_detail = OwnersViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

pets_list = PetsViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

pets_detail = PetsViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

urlpatterns = [
    path('owner/', owners_list, name='owner-list'),
    path('owner/<int:pk>/', owners_detail, name='owner-detail'),
    path('pets/', pets_list, name='pets-list'),
    path('pets/<int:pk>/', pets_detail, name='pets-detail'),
]