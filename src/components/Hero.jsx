import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className=" min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
            {/* Background Capsule Shapes */}
            {/* Top Left Capsule */}
            <div
                className="absolute w-[300px] h-[90px] left-[10%] top-[25%] rounded-[285px] z-10"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)',
                    transform: 'rotate(49.67deg)'
                }}
            ></div>
            {/* Bottom Right Capsule */}
            <div
                className="absolute w-[300px] h-[90px] left-[77%] top-[73%] rounded-[285px] z-10"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)',
                    transform: 'rotate(27.56deg)'
                }}
            ></div>
            {/* Bottom Left Capsule */}
            <div
                className="absolute w-[300px] h-[90px] rounded-[285px] z-10"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)',
                    transform: 'rotate(-14.18deg)',
                    left: '188px',
                    top: '500px'
                }}
            ></div>
            {/* Top Right Capsule */}
            <div
                className="absolute w-[300px] h-[90px] left-[75%] top-[30%] rounded-[285px] z-10"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)',
                    transform: 'rotate(-23.94deg)'
                }}
            ></div>
            {/*Middle Capsule*/}
            <div
                className="absolute w-[300px] h-[90px] left-[50%] top-[50%] rounded-[285px] z-10"
                style={{
                    background: 'linear-gradient(90deg, rgba(132, 132, 140, 0.09) 6.9%, rgba(192, 192, 192, 0.26) 48.85%, rgba(132, 132, 140, 0.09) 84.2%)',
                    transform: 'rotate(-39.86deg)'
                }}
            ></div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
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
