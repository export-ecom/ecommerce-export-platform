import React from 'react';
import styles from './Home.module.css';

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
            <main className={styles.main}>
                <Banner />
                <Features />
                <Testimonials />
                <AIAssistant />
            </main>
            <Footer />
        </>
    );
}

export default Home;
