from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics
from .models import Volcano
from .serializers import VolcanoSerializer

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')  # Redirige a la página de inicio después del inicio de sesión
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('login')  # Redirige a la página de inicio de sesión después del cierre de sesión

class VolcanoListView(generics.ListAPIView):
    queryset = Volcano.objects.all()
    serializer_class = VolcanoSerializer