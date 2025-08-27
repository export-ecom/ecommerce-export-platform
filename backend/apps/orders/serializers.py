from rest_framework import serializers
from .models import Order, OrderItem
from apps.products.serializers import ProductSerializer
from apps.products.models import Product
from apps.cart.models import CartItem
from django.db import transaction

class OrderItemSerializer(serializers.ModelSerializer):
    product_detail = ProductSerializer(source="product", read_only=True)
    class Meta:
        model = OrderItem
        fields = ("id","product","product_detail","quantity","price")

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields = ("id","user","total_amount","status","created_at","items")
        read_only_fields = ("id","user","total_amount","status","created_at","items")

class OrderCreateSerializer(serializers.Serializer):
    payment_method = serializers.ChoiceField(choices=[("cod","Cash on Delivery"), ("prepaid","Prepaid")], default="cod")

    @transaction.atomic
    def create(self, validated_data):
        user = self.context["request"].user
        cart_items = CartItem.objects.select_related("product").filter(user=user)
        if not cart_items.exists():
            raise serializers.ValidationError("Cart is empty")
        # stock check
        for ci in cart_items:
            if ci.quantity > ci.product.stock:
                raise serializers.ValidationError(f"Insufficient stock for {ci.product.name}")

        order = Order.objects.create(user=user, status="PENDING")
        total = 0
        for ci in cart_items:
            OrderItem.objects.create(
                order=order,
                product=ci.product,
                quantity=ci.quantity,
                price=ci.product.price,
            )
            ci.product.stock -= ci.quantity
            ci.product.save()
            total += ci.product.price * ci.quantity
        order.total_amount = total
        order.save()
        cart_items.delete()
        return order
