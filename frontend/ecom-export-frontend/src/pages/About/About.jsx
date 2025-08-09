import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './About.module.css';
import Mission from './Mission';
import Team from './Team';
import History from './History';

const About = () => {
  return (
    
    <div className={styles.aboutContainer}>
        <Header />
      <h1>About Us</h1>
      <p className={styles.intro}>
        <b>Welcome to our export-focused marketplace, your trusted destination for premium quality Indian products. Our platform is designed to connect global buyers with authentic Indian craftsmanship, textiles, and spiritual goods.</b>
      </p>

      <section className={styles.section}>
  <h2>What We Offer</h2>
  <p>
    We currently specialize in: <br />
    Traditional & contemporary <strong>Fabrics</strong> <br />
    Hand-carved <strong>Wooden Handicrafts</strong>
  </p>
</section>


      <section className={styles.section}>
        <h2>Why Choose Us?</h2>
        <p>
          Our mission is to bridge cultures through commerce by offering high-quality products directly from Indian artisans and manufacturers to the world. We believe in promoting local craftsmanship and making traditional Indian goods easily accessible to global markets.
        </p>
      </section>
      <Mission />
      <Team />
      <History />
      <Footer />
    </div>
  );
};

export default About;
