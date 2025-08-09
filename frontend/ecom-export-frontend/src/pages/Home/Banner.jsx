import React from 'react';
import Button from '../../components/Button/Button';

function Banner() {
    return (
        <section className="text-center py-5 px-3 banner-section text-white">
            <h1 className="display-4 fw-bold animated-float">Welcome to MySite</h1>
            <p className="fs-5 mb-4">Your one-stop solution for amazing products.</p>
            <Button onClick={() => alert('Get Started clicked!')}>Get Started</Button>
        </section>
    );
}

export default Banner;
