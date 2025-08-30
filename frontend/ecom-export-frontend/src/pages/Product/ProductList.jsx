import React, { useState, useEffect } from "react";
import ProductCategory from "./CategoryPage";
import { Link, useLocation } from "react-router-dom";
import "./ProductList.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import QuotationForm from "../../components/QuotationForm";
import API from "../../api/api"; // Axios instance with baseURL

export default function ProductListPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [lightboxImage, setLightboxImage] = useState(null);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    API.get("/products/categories/")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  // Fetch products
  useEffect(() => {
    API.get("/products/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Update category from query params
  useEffect(() => {
    const category = queryParams.get("category") || "";
    setSelectedCategory(category);
  }, [location.search]);

  // Get selected category object for filtering
  const selectedCategoryObj = categories.find((c) => c.name === selectedCategory);

  // Filter products by category
  const filteredProducts = products.filter(
    (p) =>
      !selectedCategory ||
      p.category?.id === selectedCategoryObj?.id ||
      p.category?.name === selectedCategory
  );

  // Filter by search term
  const searchedProducts = filteredProducts.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...searchedProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceLowHigh":
        return parseFloat(a.price) - parseFloat(b.price);
      case "priceHighLow":
        return parseFloat(b.price) - parseFloat(a.price);
      case "nameAZ":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="page-container">
      <Header />

      <main className="content-container">
        <h1>Our Products</h1>

        <ProductCategory
          categories={categories.map((c) => c.name)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="search-sort-container">
          <input
            type="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A to Z</option>
          </select>
        </div>

        <div className="product-page-layout">
          <div className="products-section">
            {sortedProducts.length === 0 ? (
              <p>No products found in this category or matching search term.</p>
            ) : (
              <div
                className={`product-grid ${sortedProducts.length >= 4
                  ? "dynamic-grid"
                  : `count-${sortedProducts.length}`
                  }`}
              >
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    setLightboxImage={setLightboxImage}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="form-section">
            <QuotationForm
              categories={categories.map((c) => c.name)}
              products={products}
            />
          </div>
        </div>
      </main>

      <Footer />

      {lightboxImage && (
        <div className="image-lightbox" style={{ display: "flex" }}>
          <span className="lightbox-close" onClick={() => setLightboxImage(null)}>
            &times;
          </span>
          <img src={lightboxImage} alt="Full Size" />
        </div>
      )}
    </div>
  );
}

// ----------------------
// ProductCard Component
// ----------------------
function ProductCard({ product, setLightboxImage }) {
  const [showDetails, setShowDetails] = useState(false);

  // Use first image from the images array
  const imageUrl =
    product.images && product.images.length > 0
      ? product.images[0].image
      : "/placeholder.png";

  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={product.name}
        onClick={() => setLightboxImage(imageUrl)}
        style={{ cursor: "pointer" }}
      />
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Available: {product.quantity_available}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div className="extra-details">
          <p>{product.description}</p>
          {product.attributes &&
            Object.entries(product.attributes).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
        </div>
      )}

      <Link to={`/products/${product.id}`} className="inquiry-btn">
        Add to Inquiry
      </Link>
    </div>
  );
}
