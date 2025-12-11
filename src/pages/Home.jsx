import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <Hero />
            <Projects />
        </PageTransition>
    );
};

export default Home;
