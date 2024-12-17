# Generated by Django 4.0 on 2024-12-17 17:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('testcases', '0001_initial'),
        ('stb_tester', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='stbresult',
            name='testcase',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='testcase_result', to='testcases.testcasemodel'),
        ),
    ]
