import React, { useState } from "react";
import "./Certification.css";
import badge from "../../assets/certificate.png";

const certifications = [
  { name: "ISO 9001", logo: badge },
  { name: "CE Certified", logo: badge },
  { name: "FDA Approved", logo: badge },
  { name: "Fair Trade", logo: badge },
];

const Certifications = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="section">
      <h2>Our Certifications</h2>
      <div className="marquee">
        <div className={`track ${paused ? "paused" : ""}`}>
          {certifications.map((cert, index) => (
            <div className="logoCard" key={index}>
              <img
                src={cert.logo}
                alt={cert.name}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              />
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
