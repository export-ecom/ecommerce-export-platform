import React from 'react';
import styles from './Testimonials.module.css';

function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <h2>What our users say</h2>
            <div className={styles.testimonialList}>
                <div className={styles.testimonial}>
                    <p>"This is the best service I've ever used!"</p>
                    <span>- John Doe</span>
                </div>
                <div className={styles.testimonial}>
                    <p>"Highly recommend to everyone."</p>
                    <span>- Jane Smith</span>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
