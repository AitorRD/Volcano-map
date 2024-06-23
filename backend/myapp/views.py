from .models import Volcano
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .serializers import VolcanoSerializer
from rest_framework.response import Response

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