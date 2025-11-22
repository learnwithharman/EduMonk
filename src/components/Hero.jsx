import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center">
            {/* Background Shapes */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full text-secondary font-medium text-sm mb-6 shadow-sm"
                    >
                        ✨ Revolutionizing Education
                    </motion.span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-text">
                        Manage Your School With <span className="text-primary">Zen-Like</span> Ease
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                        Streamline attendance, fees, and grades with our comprehensive management system.
                        Focus on education, we'll handle the administration.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                            Start Free Trial
                        </button>
                        <button className="bg-white text-text border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md text-lg">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <img
                            src="/logo/edumonklogo.svg"
                            alt="Edu Monk Logo"
                            className="w-full max-w-md drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Decorative circle behind logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-200 rounded-full opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-gray-100 rounded-full opacity-30" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
