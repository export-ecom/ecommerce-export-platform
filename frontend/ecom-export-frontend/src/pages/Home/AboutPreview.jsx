import React, { useState } from "react";
import { Link } from "react-router-dom";
import abt from "../../assets/abt.png";
import "./AboutPreview.css";

function AboutPreview() {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X within element
    const y = e.clientY - rect.top;  // mouse Y within element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // rotate max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setStyle({
      transform: `perspective(800px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.5s ease",
    });
  };

  return (
    <section className="about-preview my-5">
      <div className="row align-items-center">
        <div
          className="col-md-6 text-center mb-4 mb-md-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={abt}
            alt="About Us"
            className="about-img img-fluid rounded shadow"
            style={style}
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About Us</h2>
          <p className="text-muted">
            Welcome to our export-focused marketplace, your trusted destination
            for premium quality Indian products. We connect global buyers with
            authentic Indian craftsmanship, textiles, and spiritual goods.
          </p>
          <Link to="/about" className="btn btn-primary mt-2">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
