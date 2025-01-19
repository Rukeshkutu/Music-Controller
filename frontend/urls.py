from django.urls import path
from .views import index
urlpatterns = [
    path('', index ),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index),
    #path('api/', include('api.urls')),
    #path('', include('frontend.urls')),
    #path("api/user/register/", CreateUserView.as_view(), name = "register"),
]
