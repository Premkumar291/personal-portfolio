import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Background } from '../components/backgroundAnimation';
import Footer from '../components/Footer';

const AboutPage = () => {
    const skills = {
        left: ['JavaScript', 'React.js ', 'CSS - Tailwind CSS' , 'CSS - Bootstrap'],
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
            <div className="bg-black min-h-screen relative overflow-hidden">
                {/* Background Animation */}
                <Background />

                {/* Main Content */}
                <motion.div
                    className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12 py-32"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* About Me Section */}
                    <motion.section variants={itemVariants} className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-6">About me</h2>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-3xl">
                            A sophisticated e-Commerce platform designed to offer a premium shopping experience for luxury watches. It features a clean, modern interface with high-quality product images and detailed descriptions. Built with React.js, a sophisticated e-Commerce platform designed to offer a premium shopping experience. It features a clean, modern interface with high-quality product images and detailed descriptions. It allows users to browse, search, and filter watches by various criteria. It includes features like product reviews, an intuitive shopping cart, and seamless category navigation.
                        </p>
                    </motion.section>

                    {/* Skills Section */}
                    <motion.section variants={itemVariants} className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
                        <div className="grid md:grid-cols-2 gap-x-32 gap-y-2">
                            <ul className="space-y-2">
                                {skills.left.map((skill, index) => (
                                    <li key={index} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-white mr-2">•</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {skills.right.map((skill, index) => (
                                    <li key={index} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-white mr-2">•</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>

                    {/* Professional Experience Section */}
                    <motion.section variants={itemVariants} className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-6">Professional Experience</h2>
                        <div className="space-y-6 text-gray-400 text-sm leading-relaxed max-w-3xl">
                            <p>
                                As a freelance Fullstack Developer, I have been working with a client providing expertise in both frontend and backend development. I am experienced in building full-fledged web applications with technologies like React, Next.js, Node.js, Express, and more.
                            </p>
                            <p>
                                My work involves not only developing feature-rich and responsive user interfaces but also building backend APIs, server-side logic, and managing deployments. I am also experienced in database design and management using MongoDB and MySQL.
                            </p>
                            <p>
                                I enjoy taking on different roles, offering flexible support to meet the unique needs of each project.
                            </p>
                        </div>
                    </motion.section>

                    {/* Education Section */}
                    <motion.section variants={itemVariants} className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
                        <div className="text-gray-400 text-sm leading-relaxed">
                            <p className="mb-1">Government College of Engineering, Erode, Tamil Nadu</p>
                            <p>B. Tech in Information Technology (2022 - Present, Pre-final Year)</p>
                        </div>
                    </motion.section>

                    {/* Hobbies Section */}
                    <motion.section variants={itemVariants} className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-6">Hobbies</h2>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                Playing cricket
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                Reading tech blogs and books
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                Working on and building outdoor activities
                            </li>
                        </ul>
                    </motion.section>
                </motion.div>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default AboutPage;
