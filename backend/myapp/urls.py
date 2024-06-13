from django.urls import path
from . import views
from .views import VolcanoListView
from .views import VolcanoDetailView

urlpatterns = [
    path('volcanoes/', VolcanoListView.as_view(), name='volcano-list'),
    path('volcanoes/<int:id>/', VolcanoDetailView.as_view(), name='volcano-detail'),
    path('volcanoes/<int:volcano_id>/add/', views.add_favorite, name='add-favorite'),
    path('volcanoes/<int:volcano_id>/remove/', views.remove_favorite, name='remove-favorite'),
    path('favorites/', views.list_favorites, name='list-favorites'),
    # Otras URLs de la aplicación
]
