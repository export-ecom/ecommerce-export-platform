import React from "react";
import "./Achievements.css";

export default function Achievements() {
  const data = [
    { number: "10+", label: "Years of Experience" },
    { number: "25+", label: "Countries Served" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Products Delivered" },
  ];

  return (
    <section className="achievements">
      <h2 className="achievements-title">Our Achievements</h2> {/* Title Added */}
      <div className="achievements-container">
        {data.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h2 className="achievement-number">{item.number}</h2>
            <p className="achievement-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
