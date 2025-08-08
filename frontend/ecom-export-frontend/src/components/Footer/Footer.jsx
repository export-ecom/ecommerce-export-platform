import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerLinks}>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/shipping">Shipping & Return Policy</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
            <p>© 2025 MySite. All rights reserved.</p>
        </footer>

    );
}

export default Footer;
