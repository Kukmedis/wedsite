from django.conf.urls import patterns, url

from wedinvite import views

urlpatterns = patterns('',
    url(r'^index/', views.index),
    url(r'^place/', views.place),
    url(r'^photos/', views.photos),
    url(r'^$', views.index, name='index'),
)
