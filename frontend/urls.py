from django.urls import path
from .views import index
urlpatterns = [
    path('', index ),
    path('join', index),
    path('create', index),
    #path('api/', include('api.urls')),
    #path('', include('frontend.urls')),
    #path("api/user/register/", CreateUserView.as_view(), name = "register"),
    #path("api/token/", TokenObtainPairView.as_view(), name = "token"),
    #path("api/token/refresh/", TokenRefreshView.as_view(), name = "refresh"),
    #path("api-auth/", include("rest_framework.urls")),
]
