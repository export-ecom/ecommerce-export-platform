import React, { useRef } from "react";
import "./DynamicMap.css";

export default function DynamicMap() {
  const videoRef = useRef(null);

  // Mouse movement parallax
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // horizontal
    const y = (e.clientY / window.innerHeight - 0.5) * 15; // vertical
    if (videoRef.current) {
      videoRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    }
  };

  return (
    <section className="dynamic-map-section" onMouseMove={handleMouseMove}>
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="dynamic-map-video"
      >
        <source src="/videos/world_map.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}
      <h2 className="dynamic-map-header">🌍 Explore Our Global Reach</h2>
      <div className="dynamic-map-wrapper">
        <div className="info-card">
          <h3>🌐 Exported To</h3>
          <p>
            We proudly export to <b>25+ countries worldwide</b>
          </p>
          <ul>
            <li>🇺🇸 USA</li>
            <li>🇬🇧 UK</li>
            <li>🇦🇺 Australia</li>
            <li>🇦🇪 UAE</li>
            <li>🇸🇬 Singapore</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
