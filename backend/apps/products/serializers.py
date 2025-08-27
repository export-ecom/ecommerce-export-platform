from rest_framework import serializers
from .models import Product, ProductImage
from .models import Review

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ("id", "image", "alt")

class ProductSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)

    class Meta:
        model = Product
        fields = ("id","name","slug","category","category_name","description",
                  "price","stock","active","images","created_at")
        read_only_fields = ("id","slug","created_at")

    def validate(self, attrs):
        if attrs.get("price", 0) is not None and attrs.get("price") < 0:
            raise serializers.ValidationError("Price must be >= 0")
        if attrs.get("stock", 0) is not None and attrs.get("stock") < 0:
            raise serializers.ValidationError("Stock must be >= 0")
        return attrs


class ReviewSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source="user.username", read_only=True)
    class Meta:
        model = Review
        fields = ("id","user","user_name","product","rating","comment","created_at")
        read_only_fields = ("id","user","created_at")

    def validate_rating(self, val):
        if val < 1 or val > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5")
        return val