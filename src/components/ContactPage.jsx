'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { Background } from '@/components/backgroundAnimation';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const ContactPage = React.memo(() => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) return;
        setIsSubmitting(true);

        // Simulate sending process
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setName('');
            setEmail('');
            setMessage('');

            // Hide success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1200);
    };

    return (
        <PageTransition>
            <div className="bg-black min-h-screen relative overflow-hidden flex flex-col">
                <Background />

                {/* Main Content */}
                <div className="relative z-10 flex items-center justify-center flex-1 px-6 py-20 md:py-32">
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
                        <form onSubmit={handleSubmit} className="space-y-6 z-10">
                            {/* Name Field */}
                            <motion.div variants={itemVariants}>
                                <label htmlFor="name" className="block text-white text-sm mb-2 font-light">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-gray-700/50 border-none rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all resize-none"
                                    placeholder=""
                                />
                            </motion.div>

                            {/* Send Button */}
                            <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 pt-4">
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-200 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send
                                        </>
                                    )}
                                </motion.button>

                                {isSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-green-400 text-sm font-medium"
                                    >
                                        <CheckCircle2 size={16} />
                                        Message sent successfully!
                                    </motion.div>
                                )}
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;
