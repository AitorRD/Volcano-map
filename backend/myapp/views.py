from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views import View
from .models import Volcano, UserProfile
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import VolcanoSerializer
from rest_framework.response import Response

class AddFavoriteView(View):
    @staticmethod
    @login_required
    def post(request, volcano_id):
        volcano = get_object_or_404(Volcano, id=volcano_id)
        user_profile = get_object_or_404(UserProfile, user=request.user)
        
        if volcano in user_profile.favorite_volcanoes.all():
            return JsonResponse({'status': 'Volcano already in favorites'}, status=400)
        
        user_profile.favorite_volcanoes.add(volcano)
        return JsonResponse({'status': 'ok'})

class RemoveFavoriteView(View):
    @staticmethod
    @login_required
    def post(request, volcano_id):
        volcano = get_object_or_404(Volcano, id=volcano_id)
        user_profile = get_object_or_404(UserProfile, user=request.user)
        
        if volcano not in user_profile.favorite_volcanoes.all():
            return JsonResponse({'status': 'Volcano not in favorites'}, status=400)
        
        user_profile.favorite_volcanoes.remove(volcano)
        return JsonResponse({'status': 'ok'})

class ListFavoritesView(View):
    @staticmethod
    @login_required
    def get(request):
        user_profile = get_object_or_404(UserProfile, user=request.user)
        favorites = user_profile.favorite_volcanoes.all()
        favorites_data = [{'id': v.id, 'name': v.name, 'location': v.location, 'country': v.country} for v in favorites]
        return JsonResponse({'favorites': favorites_data})

class VolcanoListView(generics.ListAPIView):
    queryset = Volcano.objects.all()
    serializer_class = VolcanoSerializer
    permission_classes = [AllowAny]

class VolcanoDetailView(generics.RetrieveAPIView):
    queryset = Volcano.objects.all()
    serializer_class = VolcanoSerializer
    permission_classes = [AllowAny]
    lookup_url_kwarg = 'id'
    
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)