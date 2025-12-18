import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/', isRoute: true },
        { name: 'Projects', href: '/projects', isRoute: true },
        { name: 'Contact', href: '/contact', isRoute: true },
        { name: 'About', href: '/about', isRoute: true }
    ];

    return (
        <nav className="fixed w-full z-50 pt-4 md:pt-8">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
                {/* Desktop Menu - Centered Pill Container */}
                <div className="hidden md:flex items-center gap-1 bg-[#1a1a1d] rounded-full px-8 py-4 border border-gray-800/50">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href ||
                            (link.href !== '/' && location.pathname.startsWith(link.href));

                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`relative px-6 py-2 text-sm font-normal transition-all duration-300 ${isActive
                                    ? 'text-gray-400'
                                    : 'text-white hover:text-gray-300'
                                    }`}
                            >
                                {link.name}
                                {/* Animated underline */}
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gray-400 transition-all duration-500 ease-out origin-center ${isActive ? 'w-[60%] scale-x-100' : 'w-[60%] scale-x-0'
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none bg-[#1a1a1d] p-3 rounded-full border border-gray-800/50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1d] border-t border-gray-800 mt-4">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href ||
                                (link.href !== '/' && location.pathname.startsWith(link.href));

                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`relative text-lg font-normal transition-all duration-300 ${isActive
                                        ? 'text-gray-400'
                                        : 'text-white hover:text-gray-300'
                                        }`}
                                >
                                    {link.name}
                                    {/* Animated underline */}

                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
