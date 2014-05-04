from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
                       url(r'^bane/', include('bane.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       )
