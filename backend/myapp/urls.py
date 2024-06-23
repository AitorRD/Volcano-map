from django.urls import path
from .views import AddFavoriteView, RemoveFavoriteView, ListFavoritesView, VolcanoListView, VolcanoDetailView

urlpatterns = [
    path('api/volcanoes/', VolcanoListView.as_view(), name='volcano-list'),
    path('api/volcanoes/<int:id>/', VolcanoDetailView.as_view(), name='volcano-detail'),
    path('api/volcanoes/<int:volcano_id>/add/', AddFavoriteView.as_view(), name='add-favorite'),
    path('api/volcanoes/<int:volcano_id>/remove/', RemoveFavoriteView.as_view(), name='remove-favorite'),
    path('api/favorites/', ListFavoritesView.as_view(), name='list-favorites'),
    # Otras URLs de tu aplicación
]