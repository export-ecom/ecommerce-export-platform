from rest_framework.routers import DefaultRouter
from .views import CartViewSet, WishlistViewSet

router = DefaultRouter()
router.register("items", CartViewSet, basename="cart")
router.register("wishlist", WishlistViewSet, basename="wishlist")
urlpatterns = router.urls
