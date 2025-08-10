import React from 'react';

import Header from '../../components/Header/Header';
import AIAssistant from '../../components/AIAssistant/AIAssistant';
import Footer from '../../components/Footer/Footer';
import Banner from './Banner';
import Features from './Features';
import Testimonials from './Testimonials';

function Home() {
    return (
        <>
            <Header />
            <main className="container px-3">
                <Banner />
                <Features />
                <Testimonials />

                <div className="d-flex justify-content-center my-4">
                    {/* <AIAssistant /> */}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Home;
