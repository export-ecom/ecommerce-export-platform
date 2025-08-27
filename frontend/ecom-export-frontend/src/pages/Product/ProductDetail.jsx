import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import products from "./Products";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import QuotationForm from "../../components/QuotationForm";
import { useCart } from "../../context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // ✅ Get the current product based on ID
  const product = products.find((p) => p.id === parseInt(id));

  // ✅ Scroll to top + Reset image preview when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setCurrentIndex(0);
    setQuantity(1);
  }, [id]);

  if (!product) return <p>Product not found</p>;

  // ✅ Find similar products in the same category
  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    // ✅ Force remount when ID changes
    <div className="page-container" key={id}>
      <Header />

      <div className="product-detail-layout">
        {/* LEFT SIDE - IMAGE GALLERY */}
        <div className="product-detail">
          <div className="image-gallery-wrapper">
            {/* Thumbnail Images */}
            <div className="thumbnail-column">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`thumbnail ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            {/* Main Image Preview */}
            <div className="image-gallery">
              <img
                src={product.images[currentIndex]}
                alt={`${product.name} image`}
                className="main-image"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT SIDE - PRODUCT INFO */}
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="mrp">MRP: ₹{product.mrp}</p>
            <p className="discount">Discounted Price: ₹{product.discountedPrice}</p>
            <p><strong>Export MOQ:</strong> {product.exportMOQ}</p>
            <p><strong>Sample Order:</strong> {product.sampleOrder}</p>
            <p><strong>Available in:</strong> {product.countryAvailability.join(", ")}</p>
            <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Size/Weight:</strong> {product.sizeWeight}</p>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <button onClick={decreaseQuantity} className="qty-btn">-</button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
              />
              <button onClick={increaseQuantity} className="qty-btn">+</button>
            </div>

            {/* Buttons */}
            <div className="product-buttons">
              <Link to="/inquiry" className="inquiry-btn">
                Send Inquiry
              </Link>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                🛒 Add {quantity} to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Quotation Form */}
        <div className="quotation-section">
          <QuotationForm
            categories={[...new Set(products.map((p) => p.category))]}
            products={products}
          />
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-products-grid">
            {similarProducts.map((sp) => (
              <div className="similar-card" key={sp.id}>
                <Link to={`/products/${sp.id}`}>
                  <img src={sp.images[0]} alt={sp.name} />
                  <h3>{sp.name}</h3>
                  <p>₹{sp.discountedPrice}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
