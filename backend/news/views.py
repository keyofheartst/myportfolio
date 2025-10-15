from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.core.cache import cache
import requests

@api_view(['GET'])
@permission_classes([AllowAny])   
def get_news(request):
    cache_key = "devto_news"
    news = cache.get(cache_key)

    if news:
        return JsonResponse(news, safe=False)

    response = requests.get("https://dev.to/api/articles?per_page=5")
    if response.status_code == 200:
        data = response.json()
        simplified = [
            {
                "title": item["title"],
                "url": item["url"],
                "description": item.get("description", ""),
            }
            for item in data
        ]
        cache.set(cache_key, simplified, timeout=60 * 10)   
        return JsonResponse(simplified, safe=False)
    else:
        return JsonResponse({"error": "Failed to fetch news"}, status=500)
