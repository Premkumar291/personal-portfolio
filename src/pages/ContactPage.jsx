import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Background } from '../components/backgroundAnimation';
import Footer from '../components/Footer';

const ContactPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
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
                <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-32">
                    <motion.div
                        className="w-full max-w-md"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl font-bold text-white text-center mb-12 tracking-wider"
                        >
                            CONTACT ME
                        </motion.h1>

                        {/* Contact Form */}
                        <form className="space-y-6 z-10">
                            {/* Name Field */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="block text-white text-sm mb-2 font-light">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-gray-700/50 border-none rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                                    placeholder=""
                                />
                            </motion.div>

                            {/* Email Field */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block text-white text-sm mb-2 font-light">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-700/50 border-none rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                                    placeholder=""
                                />
                            </motion.div>

                            {/* Message Field */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-white text-sm mb-2 font-light">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full bg-gray-700/50 border-none rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all resize-none"
                                    placeholder=""
                                ></textarea>
                            </motion.div>

                            {/* Send Button */}
                            <motion.div
                                variants={itemVariants}
                                className="flex justify-center pt-4"
                            >
                                <motion.button
                                    type="submit"
                                    className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Send size={18} />
                                    Send
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default ContactPage;
