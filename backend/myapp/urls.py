from django.urls import path
from .views import  VolcanoListView, VolcanoDetailView

urlpatterns = [
    path('volcanoes/', VolcanoListView.as_view(), name='volcano-list'),
    path('volcanoes/<int:id>/', VolcanoDetailView.as_view(), name='volcano-detail'),
    # Otras URLs de tu aplicación
]