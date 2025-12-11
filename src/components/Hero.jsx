import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Hero = () => {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();
    const controls5 = useAnimation();

    useEffect(() => {
        // Drop animation first, then switch to floating
        const animateCapsule = async (controls, floatY, floatX, duration, delay = 0, rotation = 0) => {
            // Wait for delay
            if (delay > 0) {
                await new Promise(resolve => setTimeout(resolve, delay * 1000));
            }
            // Drop from top
            await controls.start({
                y: 0,
                opacity: 1,
                rotate: rotation,
                transition: { duration: 0.8, ease: "easeOut" }
            });
            // Start floating
            controls.start({
                y: [0, floatY, 0],
                x: [0, floatX, 0],
                rotate: rotation,
                transition: {
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            });
        };

        animateCapsule(controls1, -20, 15, 3, 0, 49.67);
        animateCapsule(controls2, 25, -20, 3.5, 0.15, 27.56);
        animateCapsule(controls3, 30, 10, 4, 0.3, -14.18);
        animateCapsule(controls4, -15, -25, 3.2, 0.45, -23.94);
        animateCapsule(controls5, 20, 18, 3.8, 0.6, -39.86);
    }, [controls1, controls2, controls3, controls4, controls5]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
            {/* Background Capsule Shapes */}

            {/* Top Left Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[10%] top-[25%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.3) 6.9%, rgba(192, 192, 192, 0.6) 48.85%, rgba(132, 132, 140, 0.3) 84.2%)',
                    transform: 'rotate(49.67deg)'
                }}
                initial={{ y: -1000, opacity: 0 }}
                animate={controls1}
            />

            {/* Bottom Right Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[77%] top-[73%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.3) 6.9%, rgba(192, 192, 192, 0.6) 48.85%, rgba(132, 132, 140, 0.3) 84.2%)',
                    transform: 'rotate(27.56deg)'
                }}
                initial={{ y: -1000, opacity: 0 }}
                animate={controls2}
            />

            {/* Bottom Left Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.3) 6.9%, rgba(192, 192, 192, 0.6) 48.85%, rgba(132, 132, 140, 0.3) 84.2%)',
                    transform: 'rotate(-14.18deg)',
                    left: '188px',
                    top: '500px'
                }}
                initial={{ y: -1000, opacity: 0 }}
                animate={controls3}
            />

            {/* Top Right Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[75%] top-[30%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.3) 6.9%, rgba(192, 192, 192, 0.6) 48.85%, rgba(132, 132, 140, 0.3) 84.2%)',
                    transform: 'rotate(-23.94deg)'
                }}
                initial={{ y: -1000, opacity: 0 }}
                animate={controls4}
            />

            {/* Middle Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[50%] top-[50%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.3) 6.9%, rgba(192, 192, 192, 0.6) 48.85%, rgba(132, 132, 140, 0.3) 84.2%)',
                    transform: 'rotate(-39.86deg)'
                }}
                initial={{ y: -1000, opacity: 0 }}
                animate={controls5}
            />

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
                        Hi, I'm Premkumar P
                    </h1>

                    {/* Subheading - Monospace Style */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono text-white mb-8 tracking-wider">
                        A Full Stack Developer
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
                        Enthusiastic Full Stack Developer (MERN) with a strong foundation in web technologies. Passionate about building scalable and responsive applications with modern frameworks and tools.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
