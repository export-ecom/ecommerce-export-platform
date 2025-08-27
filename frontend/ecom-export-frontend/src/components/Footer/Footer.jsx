import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <ul className="list-inline mb-2">
                <li className="list-inline-item">
                    <a href="/faq" className="text-secondary text-decoration-none hover-text-light ">FAQ</a>
                </li>
                <li className="list-inline-item">
                    <a href="/terms" className="text-secondary text-decoration-none hover-text-light">Terms & Conditions</a>
                </li>
                <li className="list-inline-item">
                    <a href="/shipping" className="text-secondary text-decoration-none hover-text-light">Shipping & Return Policy</a>
                </li>
                <li className="list-inline-item">
                    <a href="/privacy" className="text-secondary text-decoration-none hover-text-light">Privacy Policy</a>
                </li>
                {/* <li className="list-inline-item">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none hover-text-light">
                        WhatsApp
                    </a>
                </li> */}
            </ul>
            <p className="mb-0 small">© Oringo International All rights reserved.</p>
        </footer>
    );
}

export default Footer;
