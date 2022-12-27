
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_swagger.views import get_swagger_view

# from .views import index

schema_view = get_schema_view(
   openapi.Info(
      title="College Egrevience Project API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)



urlpatterns = [
    # path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path('admin', admin.site.urls),
    path('auth/',include('accounts.urls')),
    path('posts/',include('posts.urls')),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    # path('<str:slug>/', include([ 
    #     path('check_server/', index),
    #     path('api/',include('core_api.urls')),
    #     path('order_api/',include('Orders.urls')),
    # ]))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # import debug_toolbar
    # urlpatterns += [path('__debug__', include(debug_toolbar.urls)),
    #                path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    #                path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    #                ]