import re
from django.urls import path, re_path
from apps.testcases.apis import views


app_name = 'testcases'

urlpatterns = [
    path('test-case/<str:type>/', views.TestCaseListView.as_view()),
    path('create/test-case/', views.TestCaseView.as_view()),
    path('test-step/', views.TestCaseStepView.as_view()),
    path('test-step/<int:id>/', views.TestStepDeleteView.as_view()),
    path('test-case/history/<int:id>/', views.HistoryView.as_view()),
    path('test-case/details/<int:id>/', views.TestCaseDetailView.as_view(), name='testcase-details'),
    path('test-case/natco/<int:id>/', views.TestCaseNatcoView.as_view(), name='testcase-natco'),
    path('test-case/natco/natco-list/', views.TestCaseNatcoList.as_view(), name='natco-list'),
    path('test-case/natco/detail/<int:pk>/', views.TestCaseNatcoDetail.as_view(), name='natco-details'),
    path('testcase-filters/', views.FiltersView.as_view()),
    path('testcase/issues/<int:id>/', views.ScriptIssueView.as_view()),
    path('testcase/issue-detail/<int:id>/', views.ScriptIssueDetailView.as_view(), name='testcase-issue-detail'),
    path('testcase/issues/comment/<int:id>/', views.CommentsView.as_view()),
    path('testcase/issues/comment-detail/<int:pk>/', views.CommentEditView.as_view()),
    path('testcase/create-script/<int:pk>/', views.TestcaseScriptView.as_view(), name='testcase-create-script'),
    path('testcase/scripts/<int:pk>/', views.TestCaseScriptList.as_view(), name='testcase-scriptlist'),
    path('testcase/script-detail/<int:pk>/', views.TestcaseScriptDetailView.as_view(), name='testcase-script-detail'),
    re_path(r"excel/(?P<path>.*)$", views.ExcelUploadView.as_view()),
    re_path(r"update-bulk/(?P<path>.*)$", views.BulkFieldUpdateView.as_view())
]
