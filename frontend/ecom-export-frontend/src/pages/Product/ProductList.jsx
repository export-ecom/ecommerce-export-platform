import React, { useState, useEffect } from "react";
import ProductCategory from "./CategoryPage";
import { Link, useLocation } from "react-router-dom";
import "./ProductList.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import products from "./Products";
import categoryData from "./CategoryData";
import QuotationForm from "../../components/QuotationForm"; 

export default function ProductListPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "Foods"; // default to Foods

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const category = queryParams.get("category") || "Foods";
    setSelectedCategory(category);
  }, [location.search]);

  const filteredByCategory = products.filter(
    (p) => p.category === selectedCategory
  );

  const filteredProducts = filteredByCategory.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "priceLowHigh":
        return a.discountedPrice - b.discountedPrice;
      case "priceHighLow":
        return b.discountedPrice - a.discountedPrice;
      case "discount":
        const discountA = ((a.mrp - a.discountedPrice) / a.mrp) * 100;
        const discountB = ((b.mrp - b.discountedPrice) / b.mrp) * 100;
        return discountB - discountA;
      case "nameAZ":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const categoryList = ["Foods", "Spiritual Items", "Handicrafts", "Medical"];

  return (
    <div className="page-container">
      <Header />

      <main className="content-container">
        <h1>Our Products</h1>

        <ProductCategory
          categories={categoryList}
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
            <option value="discount">Discount %</option>
            <option value="nameAZ">Name: A to Z</option>
          </select>
        </div>

        <div className="product-page-layout">
          {/* LEFT: Product Grid */}
          <div className="products-section">
            {categoryData[selectedCategory] && (
              <div className="category-details">
                <img
                  src={categoryData[selectedCategory].image}
                  alt={selectedCategory}
                  className="category-banner"
                />
                <p>{categoryData[selectedCategory].description}</p>
              </div>
            )}

            {sortedProducts.length === 0 ? (
              <p>No products found in this category or matching search term.</p>
            ) : (
              <div
                className={`product-grid ${
                  sortedProducts.length >= 4
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

          {/* RIGHT: Quotation Form */}
          <div className="form-section">
            <QuotationForm
              categories={categoryList}
              products={products}
            />
          </div>
        </div>
      </main>

      <Footer />

      {lightboxImage && (
        <div className="image-lightbox" style={{ display: "flex" }}>
          <span
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
          >
            &times;
          </span>
          <img src={lightboxImage} alt="Full Size" />
        </div>
      )}
    </div>
  );
}

// ✅ Product Card
function ProductCard({ product, setLightboxImage }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.name}
        onClick={() => setLightboxImage(product.images[0])}
        style={{ cursor: "pointer" }}
      />
      <h2>{product.name}</h2>
      <p className="mrp">MRP: ₹{product.mrp}</p>
      <p className="discount">Price: ₹{product.discountedPrice}</p>
      <p>MOQ: {product.exportMOQ}</p>

      <button
        className="details-toggle"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {showDetails && (
        <div className="extra-details">
          <p>
            <strong>Available in:</strong> {product.countryAvailability.join(", ")}
          </p>
          <p>
            <strong>Size/Weight:</strong> {product.sizeWeight}
          </p>
          <p>
            <strong>Material:</strong> {product.material}
          </p>
          <p>
            <strong>Tags:</strong> {product.tags.join(", ")}
          </p>
        </div>
      )}

      <Link to={`/products/${product.id}`} className="inquiry-btn">
        Add to Inquiry
      </Link>
    </div>
  );
}
