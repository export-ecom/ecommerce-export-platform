from rest_framework import serializers
from .models import CartItem, WishlistItem
from apps.products.serializers import ProductSerializer
from apps.products.models import Product

class CartItemSerializer(serializers.ModelSerializer):
    product_detail = ProductSerializer(source="product", read_only=True)

    class Meta:
        model = CartItem
        fields = ("id","product","product_detail","quantity","added_at")

    def validate(self, attrs):
        product = attrs.get("product") or self.instance.product
        quantity = attrs.get("quantity", self.instance.quantity if self.instance else 1)
        if quantity < 1:
            raise serializers.ValidationError("Quantity must be >= 1")
        if product.stock < quantity:
            raise serializers.ValidationError("Quantity exceeds available stock")
        return attrs

class WishlistItemSerializer(serializers.ModelSerializer):
    product_detail = ProductSerializer(source="product", read_only=True)
    class Meta:
        model = WishlistItem
        fields = ("id","product","product_detail","added_at")
