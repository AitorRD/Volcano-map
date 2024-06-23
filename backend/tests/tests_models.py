from django.test import TestCase
from django.contrib.auth.models import User
from myapp.models import Volcano, UserProfile

class VolcanoModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.volcano = Volcano.objects.create(
            name='Test Volcano',
            location='Test Location',
            country='Test Country',
            latitude='10.12345',
            longitude='20.54321',
            height=1000.0,
            eruption_time=1594560000.0  # A timestamp representing a future date
        )
        self.user_profile = UserProfile.objects.create(user=self.user)

    def test_volcano_creation(self):
        self.assertEqual(self.volcano.name, 'Test Volcano')
        self.assertEqual(self.volcano.location, 'Test Location')
        self.assertEqual(self.volcano.country, 'Test Country')
        self.assertEqual(self.volcano.latitude, '10.12345')
        self.assertEqual(self.volcano.longitude, '20.54321')
        self.assertEqual(self.volcano.height, 1000.0)
        self.assertEqual(self.volcano.eruption_time, 1594560000.0)

    def test_user_profile_creation(self):
        self.assertEqual(self.user_profile.user.username, 'testuser')