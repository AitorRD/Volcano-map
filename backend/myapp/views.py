from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.db.models import Q
from .models import Volcano, UserProfile
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import VolcanoSerializer
from rest_framework.response import Response

@login_required
def add_favorite(request, volcano_id):
    user_profile = get_object_or_404(UserProfile, user=request.user)
    volcano = get_object_or_404(Volcano, id=volcano_id)
    user_profile.favorite_volcanoes.add(volcano)
    return JsonResponse({'status': 'ok'})

@login_required
def remove_favorite(request, volcano_id):
    user_profile = get_object_or_404(UserProfile, user=request.user)
    volcano = get_object_or_404(Volcano, id=volcano_id)
    user_profile.favorite_volcanoes.remove(volcano)
    return JsonResponse({'status': 'ok'})

@login_required
def list_favorites(request):
    user_profile = get_object_or_404(UserProfile, user=request.user)
    favorites = user_profile.favorite_volcanoes.all()
    return JsonResponse({'favorites': list(favorites.values())})

class VolcanoListView(generics.ListAPIView):
    queryset = Volcano.objects.all()
    serializer_class = VolcanoSerializer
    permission_classes = [AllowAny]

class VolcanoDetailView(generics.RetrieveAPIView):
    queryset = Volcano.objects.all()
    serializer_class = VolcanoSerializer
    permission_classes = [AllowAny]
    lookup_url_kwarg = 'id'  # Este es el nombre del parámetro en la URL, por ejemplo, /api/volcanoes/1/

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class VolcanoSearchAPIView(generics.ListAPIView):
    queryset = Volcano.objects.all()
    serializer_class = VolcanoSerializer

    def get_queryset(self):
        queryset = Volcano.objects.all()

        # Obtener parámetros de consulta
        name = self.request.query_params.get('name', None)
        height = self.request.query_params.get('height', None)
        location = self.request.query_params.get('location', None)
        country = self.request.query_params.get('country', None)

        # Filtrar los resultados según los parámetros de consulta
        if name:
            queryset = queryset.filter(name__icontains=name)
        if height:
            try:
                height = float(height)
                queryset = queryset.filter(height=height)
            except ValueError:
                pass
        if location:
            queryset = queryset.filter(location__icontains=location)
        if country:
            queryset = queryset.filter(country__icontains=country)

        return queryset