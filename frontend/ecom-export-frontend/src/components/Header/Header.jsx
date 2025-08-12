import React, { useState } from "react";
import AIAssistant from "../AIAssistant/AIAssistant";
import "./Header.css"; // For small extra styling


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-gradient-primary fixed-top shadow-sm px-3">
                {/* Brand */}
                <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="/">
                    <i className="bi bi-box-seam me-2"></i> Export-Ecom
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
                    </ul>
                </div>
            </nav>

            {/* Floating AI Assistant */}
            <AIAssistant />
        </header>
    );
}

export default Header;
