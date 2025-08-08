import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>MySite</div>

            {/* Hamburger button */}
            <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <span className={menuOpen ? styles.barOpen : styles.bar}></span>
                <span className={menuOpen ? styles.barOpen : styles.bar}></span>
                <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            </button>

            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <ul className={styles.navList}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
