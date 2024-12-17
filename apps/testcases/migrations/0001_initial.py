# Generated by Django 4.0 on 2024-12-17 17:14

import autoslug.fields
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields
import simple_history.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('account', '0001_initial'),
        ('stbs', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestcaseExcelResult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('run_type', models.CharField(default='', max_length=200)),
                ('date', models.CharField(default='', max_length=200)),
                ('iteration_number', models.CharField(default='', max_length=200)),
                ('testcase', models.CharField(default='', max_length=255)),
                ('cpu', models.CharField(default='', max_length=200)),
                ('ram', models.CharField(default='', max_length=200)),
                ('start_time', models.CharField(default='', max_length=200)),
                ('end_time', models.CharField(default='', max_length=200)),
                ('job_uid', models.CharField(default='', max_length=255)),
                ('node_id', models.CharField(default='', max_length=255)),
                ('failure_reason', models.TextField()),
                ('result', models.CharField(default='pass', max_length=200)),
                ('natco', models.CharField(default='', max_length=200)),
                ('load_time', models.DecimalField(decimal_places=5, max_digits=10)),
                ('cpu_usage', models.DecimalField(decimal_places=5, max_digits=10)),
                ('ram_usage', models.DecimalField(decimal_places=5, max_digits=10)),
                ('country_code', models.CharField(default='', max_length=200)),
                ('stb_release', models.CharField(default='', max_length=200)),
                ('stb_firmware', models.CharField(default='', max_length=200)),
                ('stb_android', models.CharField(default='', max_length=200)),
                ('stb_build', models.CharField(default='', max_length=255)),
                ('natco_node', models.CharField(default='', max_length=200)),
                ('comment', models.CharField(default='', max_length=200)),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TestCaseModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('jira_id', models.IntegerField(blank=True, help_text='Jira Id', null=True, unique=True, verbose_name='Jira Id')),
                ('test_name', models.CharField(help_text='Please Enter the TestCase Name', max_length=255, verbose_name='Test Report Name')),
                ('priority', models.CharField(choices=[('class_1', 'Class 1'), ('class_2', 'Class 2'), ('class_3', 'Class 3')], default='class_3', max_length=20)),
                ('summary', models.TextField(default='', verbose_name='Jira Summary')),
                ('description', models.TextField(default='', verbose_name='TestCase Description')),
                ('testcase_type', models.CharField(choices=[('performance', 'Perfomance'), ('soak', 'Soak'), ('smoke', 'Smoke')], default='smoke', max_length=20)),
                ('status', models.CharField(choices=[('todo', 'Todo'), ('ongoing', 'Ongoing'), ('completed', 'Completed')], default='todo', max_length=20)),
                ('automation_status', models.CharField(choices=[('automatable', 'Automatable'), ('not-automatable', 'Not-Automatable'), ('in-development', 'In-Development'), ('review', 'Review'), ('ready', 'Ready'), ('completed', 'Complete')], default='not-automatable', max_length=100)),
                ('slug', autoslug.fields.AutoSlugField(always_update=True, editable=False, populate_from='test_name', unique=True)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='account.account', to_field='email')),
            ],
            options={
                'verbose_name': 'TestCase',
                'verbose_name_plural': 'TestCases',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='TestReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('job_id', models.CharField(max_length=255)),
                ('run_type', models.CharField(default='', max_length=200)),
                ('date', models.DateField(default='', max_length=200)),
                ('iteration_number', models.IntegerField()),
                ('loadtime', models.DecimalField(decimal_places=5, max_digits=10)),
                ('cpu_hundred_percentile', models.CharField(default='', max_length=200)),
                ('ram_hundred_percentile', models.CharField(default='', max_length=200)),
                ('start_time', models.CharField(default='', max_length=200)),
                ('end_time', models.CharField(default='', max_length=200)),
                ('loadtime_percentile', models.CharField(default='', max_length=200)),
                ('cpu_usage_percentile', models.CharField(default='', max_length=200)),
                ('ram_usage_percentile', models.CharField(default='', max_length=200)),
                ('result', models.CharField(blank=True, default='', max_length=200, null=True)),
                ('failure_reason', models.TextField(blank=True, default='', null=True)),
                ('comment', models.TextField(blank=True, default='', null=True)),
                ('node', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='stbs.natcorelease')),
                ('testcase', models.ForeignKey(default='', max_length=255, on_delete=django.db.models.deletion.CASCADE, to='testcases.testcasemodel')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TestCaseStep',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('step_number', models.IntegerField(blank=True, null=True, verbose_name='step number')),
                ('step_data', models.TextField(blank=True, null=True, verbose_name='Testing Parameters')),
                ('step_action', models.TextField(blank=True, null=True)),
                ('expected_result', models.TextField(blank=True, null=True)),
                ('status', models.CharField(choices=[('todo', 'Todo'), ('ongoing', 'Ongoing'), ('completed', 'Completed')], default='todo', max_length=20)),
                ('testcase', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='test_steps', to='testcases.testcasemodel')),
            ],
            options={
                'verbose_name': 'TestCase Step',
                'verbose_name_plural': 'TestCase Steps',
            },
        ),
        migrations.CreateModel(
            name='TestCaseScript',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('script_name', models.CharField(default='', max_length=200)),
                ('script_location', models.URLField()),
                ('script_type', models.CharField(choices=[('performance', 'Perfomance'), ('soak', 'Soak'), ('smoke', 'Smoke')], max_length=20)),
                ('natco', models.CharField(default='', max_length=200)),
                ('description', models.TextField(default='')),
                ('developed_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='script_developed', to='account.account', to_field='email')),
                ('modified_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='script_modified', to='account.account', to_field='email')),
                ('reviewed_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='script_reviewed', to='account.account', to_field='email')),
                ('testcase', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='testcase_script', to='testcases.testcasemodel')),
            ],
            options={
                'verbose_name': 'TestCase Script',
                'verbose_name_plural': 'TestCase Script',
            },
        ),
        migrations.CreateModel(
            name='ScriptIssue',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('id', models.BigAutoField(editable=False, primary_key=True, serialize=False, unique=True)),
                ('summary', models.TextField(default='')),
                ('description', models.TextField(default='')),
                ('result', models.CharField(default='', max_length=255)),
                ('status', models.CharField(choices=[('open', 'Open'), ('under_review', 'Under Review'), ('closed', 'Closed')], default='open', max_length=255)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_issues', to='account.account', to_field='email')),
                ('resolved_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='resolved_issues', to='account.account', to_field='email')),
                ('script_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='scripts', to='testcases.testcasescript')),
                ('testcase', models.ForeignKey(max_length=255, on_delete=django.db.models.deletion.CASCADE, related_name='issues', to='testcases.testcasemodel')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='NatcoSupport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('applicable', models.BooleanField(default=True)),
                ('devices', models.ManyToManyField(blank=True, related_name='supported_devices', to='stbs.STBManufacture')),
                ('language', models.ManyToManyField(blank=True, related_name='supported_languages', to='stbs.Language')),
                ('modified', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='natoc_modified', to='account.account')),
                ('natcos', models.ManyToManyField(blank=True, related_name='supported_natcos', to='stbs.Natco')),
                ('reviewed_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='natco_reviewer', to='account.account')),
                ('testcase', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='natco_support', to='testcases.testcasemodel')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_natco', to='account.account')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='NatcoStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('natco', models.CharField(blank=True, max_length=100, null=True)),
                ('language', models.CharField(blank=True, max_length=100, null=True)),
                ('device', models.CharField(blank=True, max_length=100, null=True)),
                ('status', models.CharField(choices=[('automatable', 'Automatable'), ('not-automatable', 'Not Automatable'), ('in-development', 'In Development'), ('review', 'Review'), ('ready', 'Ready'), ('manual', 'Manual')], default='manual', max_length=100)),
                ('applicable', models.BooleanField(default=True)),
                ('modified', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='natcostatus_modified', to='account.account', to_field='email')),
                ('test_case', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='natco_status', to='testcases.testcasemodel')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_natcostatus', to='account.account', to_field='email')),
            ],
            options={
                'verbose_name': 'Natco Status',
                'verbose_name_plural': 'Natco Status',
            },
        ),
        migrations.CreateModel(
            name='HistoricalTestCaseStep',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('step_number', models.IntegerField(blank=True, null=True, verbose_name='step number')),
                ('step_data', models.TextField(blank=True, null=True, verbose_name='Testing Parameters')),
                ('step_action', models.TextField(blank=True, null=True)),
                ('expected_result', models.TextField(blank=True, null=True)),
                ('status', models.CharField(choices=[('todo', 'Todo'), ('ongoing', 'Ongoing'), ('completed', 'Completed')], default='todo', max_length=20)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='account.account')),
                ('testcase', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='testcases.testcasemodel')),
            ],
            options={
                'verbose_name': 'historical TestCase Step',
                'verbose_name_plural': 'historical TestCase Steps',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalTestCaseModel',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('jira_id', models.IntegerField(blank=True, db_index=True, help_text='Jira Id', null=True, verbose_name='Jira Id')),
                ('test_name', models.CharField(help_text='Please Enter the TestCase Name', max_length=255, verbose_name='Test Report Name')),
                ('priority', models.CharField(choices=[('class_1', 'Class 1'), ('class_2', 'Class 2'), ('class_3', 'Class 3')], default='class_3', max_length=20)),
                ('summary', models.TextField(default='', verbose_name='Jira Summary')),
                ('description', models.TextField(default='', verbose_name='TestCase Description')),
                ('testcase_type', models.CharField(choices=[('performance', 'Perfomance'), ('soak', 'Soak'), ('smoke', 'Smoke')], default='smoke', max_length=20)),
                ('status', models.CharField(choices=[('todo', 'Todo'), ('ongoing', 'Ongoing'), ('completed', 'Completed')], default='todo', max_length=20)),
                ('automation_status', models.CharField(choices=[('automatable', 'Automatable'), ('not-automatable', 'Not-Automatable'), ('in-development', 'In-Development'), ('review', 'Review'), ('ready', 'Ready'), ('completed', 'Complete')], default='not-automatable', max_length=100)),
                ('slug', autoslug.fields.AutoSlugField(always_update=True, editable=False, populate_from='test_name')),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('created_by', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='account.account', to_field='email')),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='account.account')),
            ],
            options={
                'verbose_name': 'historical TestCase',
                'verbose_name_plural': 'historical TestCases',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalNatcoSupport',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('applicable', models.BooleanField(default=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='account.account')),
                ('modified', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='account.account')),
                ('reviewed_by', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='account.account')),
                ('testcase', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='testcases.testcasemodel')),
                ('user', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='account.account')),
            ],
            options={
                'verbose_name': 'historical natco support',
                'verbose_name_plural': 'historical natco supports',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='HistoricalNatcoStatus',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('natco', models.CharField(blank=True, max_length=100, null=True)),
                ('language', models.CharField(blank=True, max_length=100, null=True)),
                ('device', models.CharField(blank=True, max_length=100, null=True)),
                ('status', models.CharField(choices=[('automatable', 'Automatable'), ('not-automatable', 'Not Automatable'), ('in-development', 'In Development'), ('review', 'Review'), ('ready', 'Ready'), ('manual', 'Manual')], default='manual', max_length=100)),
                ('applicable', models.BooleanField(default=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='account.account')),
                ('modified', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='account.account', to_field='email')),
                ('test_case', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='testcases.testcasemodel')),
                ('user', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='account.account', to_field='email')),
            ],
            options={
                'verbose_name': 'historical Natco Status',
                'verbose_name_plural': 'historical Natco Status',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('comments', models.TextField()),
                ('object_id', models.PositiveIntegerField()),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype')),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='created_comments', to='account.account', to_field='email')),
            ],
            options={
                'get_latest_by': 'modified',
                'abstract': False,
            },
        ),
    ]
