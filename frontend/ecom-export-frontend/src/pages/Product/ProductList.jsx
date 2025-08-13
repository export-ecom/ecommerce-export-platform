import React, { useState } from "react";
import ProductCategory from "./CategoryPage";
import { Link } from "react-router-dom";
import "./ProductList.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import products from "./Products";

export default function ProductListPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredByCategory =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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

  return (
    <div className="page-container">
      <Header />

      <main className="content-container">
        <h1>Our Products</h1>

        <ProductCategory
          categories={[
            "All",
            "Wooden Handicrafts",
            "Fabrics",
            "Foods",
            "Medical",
          ]}
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

        {sortedProducts.length === 0 ? (
          <p>No products found in the selected category or search term.</p>
        ) : (
          <div
            className={`product-grid ${
              sortedProducts.length >= 4
                ? "dynamic-grid"
                : `count-${sortedProducts.length}`
            }`}
          >
            {sortedProducts.map((product) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product-card" key={product.id}>
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

      {/* Toggle button */}
      <button
        className="details-toggle"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      {/* Conditional details */}
      {showDetails && (
        <div className="extra-details">
          <p>
            <strong>Available in:</strong>{" "}
            {product.countryAvailability.join(", ")}
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
})}

          </div>
        )}
      </main>

      <Footer />

      {/* Lightbox */}
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
 