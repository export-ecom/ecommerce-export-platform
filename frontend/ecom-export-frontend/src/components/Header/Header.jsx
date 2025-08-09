import React, { useState } from 'react';
import AIAssistant from "../AIAssistant/AIAssistant";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top px-3">
            <a className="navbar-brand fw-bold fs-4" href="">
                Export-Ecom
            </a>

            <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/products">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/auth">Login/Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
                <div className="ms-3">
                    <AIAssistant />
                </div>
            </div>
        </nav>
    );
}

export default Header;
