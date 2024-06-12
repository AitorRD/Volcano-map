import os
import csv
from django.core.management.base import BaseCommand
from myapp.models import Volcano

class Command(BaseCommand):
    help = 'Import volcanoes data from a CSV file'

    def handle(self, *args, **kwargs):
        # Construir la ruta del archivo CSV
        csv_file = os.path.join(os.path.dirname(__file__), 'volcanoes_database.csv')

        # Verificar si el archivo CSV existe
        if not os.path.exists(csv_file):
            self.stdout.write(self.style.ERROR(f'CSV file does not exist at path: {csv_file}'))
            return

        # Abrir y leer el archivo CSV
        with open(csv_file, 'r') as file:
            reader = csv.reader(file)
            next(reader)  # Saltar la cabecera

            for row in reader:
                Volcano.objects.get_or_create(
                    name=row[0],
                    location=row[1],
                    country=row[2],
                    latitude=row[3],
                    longitude=row[4],
                    height=float(row[5]),
                    eruption_time=float(row[6])
                )

        self.stdout.write(self.style.SUCCESS('Successfully imported data'))