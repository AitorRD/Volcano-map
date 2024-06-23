from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from myapp.models import Volcano
from rest_framework.test import APIClient
class VolcanoListViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.volcano1 = Volcano.objects.create(name='Volcano 1', location='Location 1', country='Country 1', latitude='10.0', longitude='20.0', height=1000.0, eruption_time=1609459200.0)
        self.volcano2 = Volcano.objects.create(name='Volcano 2', location='Location 2', country='Country 2', latitude='11.0', longitude='21.0', height=1500.0, eruption_time=1609459200.0)

    def test_volcano_list_view(self):
        url = reverse('volcano-list')
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)  # Verifica que se devuelvan todos los volcanes

    def test_volcano_detail_view(self):
        url = reverse('volcano-detail', args=[self.volcano1.id])
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Volcano 1')

class VolcanoDetailViewNotFoundTest(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_volcano_detail_not_found(self):
        volcano = Volcano.objects.create(
            name='Test Volcano',
            location='Test Location',
            country='Test Country',
            latitude='0',
            longitude='0',
            height=1000.0,
            eruption_time=0.0
        )

        url = reverse('volcano-detail', kwargs={'id': volcano.id + 8937321832})  # Suponemos que el ID no existe
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

