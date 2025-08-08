import React from 'react';
import styles from './Banner.module.css';
import Button from '../../components/Button/Button';

function Banner() {
    return (
        <section className={styles.banner}>
            <h1>Welcome to MySite</h1>
            <p>Your one-stop solution for amazing products.</p>
            <Button onClick={() => alert('Get Started clicked!')}>Get Started</Button>
        </section>
    );
}

export default Banner;
