from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Gom tất cả API con lại
    path('api/news/', include('news.urls')),
    path('api/about/', include('about.urls')),
    path('api/hero/', include('hero.urls')),
    path('api/projects/', include('projects.urls')),
    path('api/technologies/', include('technologies.urls')),
    path('api/testimonials/', include('testimonials.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/footer/', include('footer.urls')),
]

if settings.DEBUG:
  urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



