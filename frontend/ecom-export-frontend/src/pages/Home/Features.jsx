import React from 'react';
import './Feature.css'

function Features() {
    return (
        <section className="py-5 text-center">
            <h2 className="fs-2 mb-4 fw-bold">Features</h2>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
                <div className="card feature-card p-3" style={{ width: '250px' }}>
                    <h3 className="mb-3 text-dark">Fast</h3>
                    <p className="text-secondary">Experience blazing fast performance.</p>
                </div>
                <div className="card feature-card p-3" style={{ width: '250px' }}>
                    <h3 className="mb-3 text-dark">Reliable</h3>
                    <p className="text-secondary">Our service is available 24/7.</p>
                </div>
                <div className="card feature-card p-3" style={{ width: '250px' }}>
                    <h3 className="mb-3 text-dark">User-Friendly</h3>
                    <p className="text-secondary">Simple and intuitive design.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
