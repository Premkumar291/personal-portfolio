import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Background } from '../components/backgroundAnimation';
import Footer from '../components/Footer';

const AboutPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const skills = {
        left: ['JavaScript', 'React.js ', 'CSS - Tailwind CSS', 'CSS - Bootstrap'],
        right: ['Node.js - Express', 'MySQL - MongoDB', 'Git - Github']
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-black text-gray-100 font-sans relative overflow-hidden">
                {/* Background Animation */}
                <Background />

                {/* Main content */}
                <motion.div
                    className="relative z-10 max-w-4xl mx-auto px-6 py-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* About Section */}
                    <motion.section variants={itemVariants} className="mb-16 mt-20 md:mt-30">
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            {/* Text content */}
                            <div className="flex-1">
                                <h1 className="text-4xl font-bold mb-4 text-white">About me</h1>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Enthusiastic Full Stack Developer (MERN) with a strong foundation in web technologies. Passionate about building scalable and responsive applications with modern frameworks and tools.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Skills Section */}
                    <motion.section variants={itemVariants} className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {skills.left.map((skill, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3">•</span>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {skills.right.map((skill, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3">•</span>
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Professional Experience Section */}
                    <motion.section variants={itemVariants} className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-white">Professional Experience</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Freelance Web Developer</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    As a Freelance Web Developer, I have been working on a client-providing web solutions and full-fledged
                                    web applications for various projects. I have hands-on experience with various platforms.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    My work involves not only developing feature-rich and responsive web interfaces but also considering
                                    best practices for SEO, performance, and accessibility. I have a broad range of experience and also
                                    specialize in designing and developing hosting platforms and maintaining applications in production.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Over the years, I've developed experience in different roles, offering flexible support to meet the
                                    unique needs of each project.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Education Section */}
                    <motion.section variants={itemVariants} className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-white">Education</h2>
                        <div className="text-gray-400 text-sm">
                            <p className="mb-2">
                                <span className="text-white font-semibold">Government College of Engineering, Erode, Tamil Nadu</span>
                            </p>
                            <p>B.Tech in Information Technology (2023 - Presently In the final Year)</p>
                        </div>
                    </motion.section>

                    {/* Hobbies Section */}
                    <motion.section variants={itemVariants} className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-white">Hobbies</h2>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-start">
                                <span className="mr-3">•</span>
                                <span>Exploring new technologies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">•</span>
                                <span>Playing Batmiton</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">•</span>
                                <span>Working out and other outdoor activities</span>
                            </li>
                        </ul>
                    </motion.section>
                </motion.div>


            </div>
        </PageTransition>
    );
};

export default AboutPage;
