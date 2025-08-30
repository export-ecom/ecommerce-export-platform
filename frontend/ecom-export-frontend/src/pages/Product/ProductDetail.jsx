import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import QuotationForm from "../../components/QuotationForm";
import API from "../../api/api"; // Axios instance
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";


export default function ProductDetailPage() {
  const { user } = useAuth();

  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState([]);

  // Fetch categories for quotation form
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await API.get("/products/categories/");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(null);
      setCurrentIndex(0);
      setQuantity(1);
      try {
        const res = await API.get(`/products/products/${id}/`);
        const prod = res.data;
        setProduct(prod);

        // Fetch all products to find similar ones in the same category
        if (prod.category) {
          const allRes = await API.get("/products/products/");
          const similar = allRes.data.filter(
            (p) => p.category?.id === prod.category.id && p.id !== prod.id
          );
          setSimilarProducts(similar);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));



  const handleAddToCart = async () => {
    if (!product) return;
    try {
      const res = await addToCart(product.id, quantity); // CartContext handles API + state
      console.log("Add to Cart response:", res?.data);
      alert(`Added ${quantity} item(s) to cart!`);
    } catch (err) {
      console.error("Add to Cart error:", err);
      alert("Error adding to cart. Check console for details.");
    }
  };


  if (!product) return <p>Loading product...</p>;

  const mainImage = product.images?.[currentIndex]?.image || "/placeholder.png";

  return (
    <div className="page-container" key={id}>
      <Header />

      <div className="product-detail-layout">
        {/* LEFT SIDE - IMAGE GALLERY */}
        <div className="product-detail">
          <div className="image-gallery-wrapper">
            <div className="thumbnail-column">
              {product.images?.map((imgObj, idx) => (
                <img
                  key={idx}
                  src={imgObj.image}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`thumbnail ${currentIndex === idx ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <div className="image-gallery">
              <img src={mainImage} alt={product.name} className="main-image" draggable={false} />
            </div>
          </div>

          {/* RIGHT SIDE - PRODUCT INFO */}
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="mrp">MRP: ₹{product.price}</p>
            {product.discountedPrice && <p className="discount">Discounted Price: ₹{product.discountedPrice}</p>}
            <p><strong>Export MOQ:</strong> {product.exportMOQ}</p>
            <p><strong>Sample Order:</strong> {product.sampleOrder}</p>
            <p><strong>Available in:</strong> {product.countryAvailability?.join(", ")}</p>
            <p><strong>Tags:</strong> {product.tags?.join(", ")}</p>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Size/Weight:</strong> {product.sizeWeight}</p>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <button onClick={decreaseQuantity} className="qty-btn">-</button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button onClick={increaseQuantity} className="qty-btn">+</button>
            </div>

            {/* Buttons */}
            <div className="product-buttons">
              <Link to="/inquiry" className="inquiry-btn">Send Inquiry</Link>

              {user ? (
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  🛒 Add {quantity} to Cart
                </button>
              ) : (
                <Link to="/auth" className="add-to-cart-btn">
                  🔒 Login to Add to Cart
                </Link>
              )}
            </div>

          </div>
        </div>

        {/* Quotation Form */}
        <div className="quotation-section">
          <QuotationForm categories={categories.map((c) => c.name)} products={[product, ...similarProducts]} />
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-products-grid">
            {similarProducts.map((sp) => (
              <div className="similar-card" key={sp.id}>
                <Link to={`/products/${sp.id}`}>
                  <img src={sp.images?.[0]?.image || "/placeholder.png"} alt={sp.name} />
                  <h3>{sp.name}</h3>
                  <p>₹{sp.discountedPrice || sp.price}</p>
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
