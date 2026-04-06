import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Schools Trust Us", value: "1,200+", detail: "Across 15 countries" },
    { label: "Active Students", value: "150k+", detail: "Growing daily" },
    { label: "Uptime", value: "99.9%", detail: "Enterprise reliability" },
    { label: "Support", value: "24/7", detail: "Global coverage" },
];

const Stats = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-text">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-dark p-10 rounded-[3rem] border border-white/5 relative group hover:bg-white/5 transition-colors duration-500"
                        >
                            <div className="flex flex-col gap-2 relative z-10">
                                <motion.span 
                                    className="text-5xl lg:text-6xl font-heading font-black text-white mb-2 block tracking-tighter"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    {stat.value}
                                </motion.span>
                                <span className="text-primary font-bold text-sm uppercase tracking-widest">
                                    {stat.label}
                                </span>
                                <p className="text-gray-500 text-xs font-medium mt-4">
                                    {stat.detail}
                                </p>
                            </div>

                            {/* Hover Decorative Element */}
                            <div className="absolute top-6 right-6 w-12 h-12 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA / Banner within Stats */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <p className="text-2xl font-heading font-bold text-white max-w-xl text-center md:text-left">
                        Join the <span className="text-secondary text-3xl italic">1,200+</span> schools modernizing their 
                        management with Edumonk.
                    </p>
                    <button className="bg-white text-text px-10 py-5 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-primary/20">
                        Get Started Today
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
