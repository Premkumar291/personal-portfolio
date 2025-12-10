import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <PageTransition>
            <Hero />
            <Projects />
            <Footer />
        </PageTransition>
    );
};

export default Home;
