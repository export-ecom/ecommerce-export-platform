import React, { useState } from "react";
import Whatsapp from "../whatsapp/whatsapp";
import "./Header.css"; 
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logoOrg3.png"; // ✅ Import your logo

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-gradient-primary fixed-top shadow-sm px-3">
                {/* Brand Logo */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img 
                        src={logo} 
                        alt="Oringo International Logo" 
                        className="logo-img"
                    />
                </a>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto align-items-md-center">
                        <li className="nav-item">
                            <a className="nav-link nav-link-hover" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-hover" href="/products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-hover" href="/blog">Blog/News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-hover" href="/contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-hover" href="/about">About</a>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/cart" className="nav-link nav-link-hover d-flex align-items-center">
                                <FaShoppingCart size={22} className="me-1" />
                                Cart
                            </Link>
                        </li>

                        {/* ✅ WhatsApp Icon in Navbar */}
                        <li className="nav-item ms-2">
                            <a 
                                className="nav-link nav-link-hover d-flex align-items-center" 
                                href="https://wa.me/919876543210" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp size={22} className="text-success me-1" />
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Floating WhatsApp Button */}
            <Whatsapp />
        </header>
    );
}

export default Header;
