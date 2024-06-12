from django.urls import path
from . import views
from .views import VolcanoListView

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('volcanoes/', VolcanoListView.as_view(), name='volcano-list'),
    # Otras URLs de la aplicación
]
    
