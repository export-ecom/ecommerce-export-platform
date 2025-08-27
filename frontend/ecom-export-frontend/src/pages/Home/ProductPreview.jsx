import React from "react";
import { Link } from "react-router-dom";
import "./ProductPreview.css";
import img1 from "../../assets/product1.jpg";
import img2 from "../../assets/Product2.jpg";
import img3 from "../../assets/Handicraft.jpg";
import img4 from "../../assets/product4.jpg";

// category data (replace with dynamic later if needed)
const categories = [
  {
    name: "Foods",
    description: "Spices, snacks, dry fruits, and packaged foods from India. Our products are sourced from trusted suppliers to ensure freshness and authentic taste for global markets.",
    image: img1,
  },
  {
    name: "Spiritual Items",
    description: "Devotional photo frames, idols, puja kits, incense sticks, and more. Perfectly crafted to bring peace, positivity, and spirituality to homes and workplaces.",
    image: img2,
  },
  {
    name: "Handicrafts",
    description: "Beautiful handcrafted decor, artifacts, and art pieces. Each product is designed by skilled artisans, reflecting the rich culture and heritage of India.",
    image: img3,
  },
  {
    name: "Medical",
    description: "Ayurvedic, herbal, and essential healthcare products. Our range promotes natural wellness and is carefully curated for safe and effective global export.",
    image: img4,
  },
];


function ProductCataloguePreview() {
  return (
    <section className="catalogue-preview my-5">
      <h2 className="text-center fw-bold mb-4">Our Products</h2>
      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-6 col-lg-3 mb-4" key={cat.name}>
            <div className="catalogue-card shadow-sm h-100">
              <img src={cat.image} alt={cat.name} className="catalogue-img" />
              <div className="catalogue-body">
                <h5 className="fw-bold">{cat.name}</h5>
                <p className="text-muted">{cat.description}</p>
                <Link
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="btn btn-primary btn-sm"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCataloguePreview;
