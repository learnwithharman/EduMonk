import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm shadow-sm py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo & Name */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img src="/logo/edumonklogo.svg" alt="EduMonk" className="h-12 w-auto relative z-10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-heading font-black tracking-tight flex items-center leading-none">
                            <span className="text-primary relative overflow-hidden">
                                <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full">Edu</span>
                                <span className="absolute top-0 left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-secondary">Edu</span>
                            </span>
                            <span className="text-secondary relative overflow-hidden">
                                <span className="inline-block transform transition-transform duration-300 group-hover:-translate-y-full delay-75">Monk</span>
                                <span className="absolute top-0 left-0 inline-block transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 delay-75 text-primary">Monk</span>
                            </span>
                        </h1>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text hover:text-primary font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <button className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-secondary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-text hover:text-primary font-medium py-2 block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors w-full">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
