from django.urls import path
from ninja import NinjaAPI

from .api import router as api_router
from .views import HomeView

api = NinjaAPI()
api.add_router('', router=api_router)

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("api/", api.urls),  # type: ignore
]
