from django.urls import path
from .views import *


urlpatterns = [
    path('', RoomView.as_view()),
    path('create-room/', CreateRoomView.as_view()),
]