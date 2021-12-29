from django.urls import path

from . import views

urlpatterns = [
    path('memo-list/', views.MemoList.as_view()),
]