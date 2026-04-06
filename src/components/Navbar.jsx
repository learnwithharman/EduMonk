import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

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
        { name: 'Solutions', href: '#solutions' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled 
                ? 'py-3' 
                : 'py-6'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'glass shadow-premium' : 'bg-transparent'}`}>
                    {/* Logo & Name */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative h-10 w-10 flex items-center justify-center bg-primary/10 rounded-xl overflow-hidden group-hover:bg-primary/20 transition-colors duration-500">
                            <img src="/logo/edumonklogo.svg" alt="EduMonk" className="h-7 w-auto relative z-10 transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-xl font-heading font-bold tracking-tight text-text leading-none">
                                Edu<span className="text-primary">Monk</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 leading-none mt-1">Academy OS</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-text/70 hover:text-primary font-medium transition-colors relative group text-sm"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
                                </a>
                            ))}
                        </div>
                        <div className="h-6 w-[1px] bg-gray-200" />
                        <div className="flex items-center gap-4">
                            <button className="text-sm font-semibold text-text hover:text-primary transition-colors">
                                Sign In
                            </button>
                            <button className="bg-primary text-white pl-6 pr-5 py-2.5 rounded-full font-semibold hover:bg-text transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-2 group text-sm">
                                Get Started
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-text hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full px-6 py-4 md:hidden"
                    >
                        <div className="glass rounded-3xl shadow-premium p-6 flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-text hover:text-primary font-semibold py-2 block text-lg border-b border-gray-100 last:border-0"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                            <div className="flex flex-col gap-3 pt-2">
                                <button className="text-center font-bold text-text py-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors">
                                    Sign In
                                </button>
                                <button className="bg-primary text-white py-4 rounded-2xl font-bold hover:bg-text transition-colors shadow-lg shadow-primary/20">
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
