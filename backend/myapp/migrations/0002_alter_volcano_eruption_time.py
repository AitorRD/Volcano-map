# Generated by Django 4.2.5 on 2024-06-12 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volcano',
            name='eruption_time',
            field=models.CharField(max_length=500),
        ),
    ]
