import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <section className="contactSection">
      <Header />
      <div className="container">
        <h1 className="contactTitle">Contact Us</h1>
        <p className="contactSubtitle">
          Have questions or need assistance? We’re here to help!  
          Fill out the form below or reach us through our contact details.
        </p>
        <h2 className="contactHeading">Get in Touch</h2>
        <div className="contactGrid">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
