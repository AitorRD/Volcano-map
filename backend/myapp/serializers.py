from rest_framework import serializers
from .models import Volcano

class VolcanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volcano
        fields = ['name', 'location', 'country', 'latitude', 'longitude', 'height', 'eruption_time']