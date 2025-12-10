import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0f0f11] border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <a href="#" className="text-2xl font-bold text-white tracking-tighter">
                        Portfolio<span className="text-blue-500">.</span>
                    </a>
                    <p className="text-gray-500 text-sm mt-2">
                        © {new Date().getFullYear()} Premkumar. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-8 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;