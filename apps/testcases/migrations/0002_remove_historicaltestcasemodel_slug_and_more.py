# Generated by Django 4.0 on 2024-12-17 17:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testcases', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historicaltestcasemodel',
            name='slug',
        ),
        migrations.RemoveField(
            model_name='testcasemodel',
            name='slug',
        ),
    ]