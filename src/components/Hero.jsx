import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Shield, Star, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />
            
            {/* Floating Decorative Shapes */}
            <motion.div 
                animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl hidden lg:block"
            />
            <motion.div 
                animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl hidden lg:block"
            />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary font-bold text-xs uppercase tracking-widest shadow-premium border border-gray-100 mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Next-Gen School Management
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.05] mb-8 text-text">
                            The Brain For <br />
                            Your <span className="text-secondary drop-shadow-sm">Academy</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-xl">
                            Edumonk provides a zen-like experience to manage grades, 
                            attendance, and school operations with modern efficiency. 
                            Built for forward-thinking institutions.
                        </p>

                        <div className="flex flex-wrap gap-5 mb-12">
                            <button className="bg-primary text-white px-8 py-5 rounded-full font-bold hover:bg-text transition-all shadow-premium hover:shadow-primary/30 flex items-center gap-3 transform hover:-translate-y-1">
                                Start Your Journey
                                <ArrowRight size={20} />
                            </button>
                            <button className="bg-white text-text border border-gray-200 px-8 py-5 rounded-full font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Play size={16} fill="currentColor" />
                                </span>
                                Watch Demo
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-10 pt-4 border-t border-gray-100">
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-black text-text">200+</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Institutions</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-black text-text">50k+</span>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Teachers</span>
                            </div>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">
                                    +5k
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative perspective-1000"
                    >
                        {/* Main Illustration Wrapper */}
                        <div className="relative z-10 glass-dark p-2 rounded-[3rem] shadow-premium overflow-hidden">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img
                                    src="/images/hero-illustration.png"
                                    alt="EduMonk Platform Preview"
                                    className="w-full h-auto rounded-[2.5rem] shadow-2xl brightness-110 contrast-110"
                                />
                            </motion.div>
                        </div>

                        {/* Floating Cards / Details */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -top-10 -right-10 glass p-5 rounded-3xl shadow-premium z-20 flex items-center gap-4 border border-white/50"
                        >
                            <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                                <Shield size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-black text-text">Secure Data</p>
                                <p className="text-xs text-gray-400">Enterprise Encryption</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="absolute -bottom-10 -left-10 glass p-5 rounded-3xl shadow-premium z-20 border border-white/50"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="flex -space-x-1">
                                    <Star size={12} className="text-primary fill-primary" />
                                    <Star size={12} className="text-primary fill-primary" />
                                    <Star size={12} className="text-primary fill-primary" />
                                </div>
                                <span className="text-[10px] font-black uppercase text-gray-400">Top Rated</span>
                            </div>
                            <p className="text-sm font-black text-text">99.9% Uptime</p>
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 blur-[120px] -z-10 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
