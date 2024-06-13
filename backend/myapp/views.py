from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
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
    lookup_url_kwarg = 'id'  # Este es el nombre del parámetro en la URL, por ejemplo, /api/volcanoes/1/

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)