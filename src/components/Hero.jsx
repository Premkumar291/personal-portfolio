import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
            {/* Background Capsule Shapes */}

            {/* Top Left Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[10%] top-[25%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)'
                }}
                initial={{ y: -1000, opacity: 0, rotate: 49.67 }}
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    opacity: 1,
                    rotate: 49.67,
                    transition: {
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        opacity: { duration: 0.5, delay: 0 }
                    }
                }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0
                }}
            />

            {/* Bottom Right Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[77%] top-[73%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)'
                }}
                initial={{ y: -1000, opacity: 0, rotate: 27.56 }}
                animate={{
                    y: [0, 25, 0],
                    x: [0, -20, 0],
                    opacity: 1,
                    rotate: 27.56,
                    transition: {
                        y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                        x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                        opacity: { duration: 0.5, delay: 0.2 }
                    }
                }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0.2
                }}
            />

            {/* Bottom Left Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)',
                    left: '188px',
                    top: '500px'
                }}
                initial={{ y: -1000, opacity: 0, rotate: -14.18 }}
                animate={{
                    y: [0, 30, 0],
                    x: [0, 10, 0],
                    opacity: 1,
                    rotate: -14.18,
                    transition: {
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                        x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
                        opacity: { duration: 0.5, delay: 0.4 }
                    }
                }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0.4
                }}
            />

            {/* Top Right Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[75%] top-[30%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)'
                }}
                initial={{ y: -1000, opacity: 0, rotate: -23.94 }}
                animate={{
                    y: [0, -15, 0],
                    x: [0, -25, 0],
                    opacity: 1,
                    rotate: -23.94,
                    transition: {
                        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
                        x: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
                        opacity: { duration: 0.5, delay: 0.6 }
                    }
                }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0.6
                }}
            />

            {/* Middle Capsule */}
            <motion.div
                className="absolute w-[300px] h-[90px] left-[50%] top-[50%] rounded-[285px] z-30"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)'
                }}
                initial={{ y: -1000, opacity: 0, rotate: -39.86 }}
                animate={{
                    y: [0, 20, 0],
                    x: [0, 18, 0],
                    opacity: 1,
                    rotate: -39.86,
                    transition: {
                        y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
                        x: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
                        opacity: { duration: 0.5, delay: 0.8 }
                    }
                }}
                transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    delay: 0.8
                }}
            />

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
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
