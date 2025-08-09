import React from 'react';

function Testimonials() {
    return (
        <section className="bg-light py-5 text-center">
            <h2 className="fs-2 mb-4 fw-bold">What our users say</h2>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
                <div className="testimonial-card">
                    <p className="mb-3 fst-italic">"This is the best service I've ever used!"</p>
                    <span className="fw-bold text-secondary">- John Doe</span>
                </div>
                <div className="testimonial-card">
                    <p className="mb-3 fst-italic">"Highly recommend to everyone."</p>
                    <span className="fw-bold text-secondary">- Jane Smith</span>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
