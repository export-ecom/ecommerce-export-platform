import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import products from "./Products";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!product) return <p>Product not found</p>;

  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  // Find related products by tags
  const relatedByTags = products.filter(
    (p) =>
      p.id !== product.id && p.tags.some((tag) => product.tags.includes(tag))
  );

  return (
    <div className="page-container">
      <Header />
      <div className="product-detail">
        <div className="image-gallery-wrapper">
          {/* Thumbnails Column */}
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

          {/* Main Image */}
          <div className="image-gallery">
            <div
              className="image-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} image ${index + 1}`}
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="mrp">MRP: ₹{product.mrp}</p>
          <p className="discount">
            Discounted Price: ₹{product.discountedPrice}
          </p>
          <p>
            <strong>Export MOQ:</strong> {product.exportMOQ}
          </p>
          <p>
            <strong>Sample Order:</strong> {product.sampleOrder}
          </p>
          <p>
            <strong>Available in:</strong>{" "}
            {product.countryAvailability.join(", ")}
          </p>
          <p>
            <strong>Tags:</strong> {product.tags.join(", ")}
          </p>
          <p>
            <strong>Material:</strong> {product.material}
          </p>
          <p>
            <strong>Size/Weight:</strong> {product.sizeWeight}
          </p>

          <button className="inquiry-btn">Send Inquiry</button>
        </div>
      </div>

      {relatedByTags?.length > 0 && (
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="related-products-grid">
            {relatedByTags.map((rp) => (
              <div className="related-card" key={rp.id}>
                <Link to={`/products/${rp.id}`}>
                  <img
                    src={rp.images?.[0] || "/placeholder.jpg"}
                    alt={rp.name || "Product"}
                    className="related-img"
                  />
                  <h3>{rp.name}</h3>
                  <p>₹{rp.discountedPrice?.toLocaleString("en-IN")}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

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
