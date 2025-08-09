import React from 'react';
import styles from './Features.module.css';

function Features() {
    return (
        <section className={styles.features}>
            <h2>Features</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>Fast</h3>
                    <p>Experience blazing fast performance.</p>
                </div>
                <div className={styles.card}>
                    <h3>Reliable</h3>
                    <p>Our service is available 24/7.</p>
                </div>
                <div className={styles.card}>
                    <h3>User-Friendly</h3>
                    <p>Simple and intuitive design.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
