from django.urls import path
from .views import PlaceOrderView

urlpatterns = [
    path("place-order/", PlaceOrderView.as_view(), name="place-order"),
]

# POST http://127.0.0.1:8000/api/orders/place-order/
