# Generated by Django 4.2.5 on 2024-06-12 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_alter_volcano_eruption_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volcano',
            name='eruption_time',
            field=models.FloatField(),
        ),
    ]
