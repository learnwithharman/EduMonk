import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Schools Trust Us", value: "1000+" },
    { label: "Active Students", value: "50,000+" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Customer Support", value: "24/7" },
];

const Stats = () => {
    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4"
                        >
                            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-white">
                                {stat.value}
                            </h3>
                            <p className="text-white/80 font-medium text-lg">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
