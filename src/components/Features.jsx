import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    BookOpen,
    Home,
    CreditCard,
    GraduationCap,
    Users,
    Calendar,
    FileText,
    Smartphone,
    ArrowRight
} from 'lucide-react';

const features = [
    {
        icon: <BarChart3 size={24} />,
        title: "Attendance",
        description: "Automated student tracking with instant parent notifications."
    },
    {
        icon: <BookOpen size={24} />,
        title: "Assignments",
        description: "Digital distribution and seamless grading workflows."
    },
    {
        icon: <Home size={24} />,
        title: "Homework",
        description: "Track completion and maintain detailed progress records."
    },
    {
        icon: <CreditCard size={24} />,
        title: "Fee Management",
        description: "Secure collection with automated payment reminders."
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Grade Records",
        description: "Comprehensive grade books and GPA calculation."
    },
    {
        icon: <Users size={24} />,
        title: "Communication",
        description: "Real-time updates and direct parent engagement."
    },
    {
        icon: <Calendar size={24} />,
        title: "Timetable",
        description: "Dynamic class schedules and teacher assignments."
    },
    {
        icon: <FileText size={24} />,
        title: "Directories",
        description: "Complete student profiles and academic history."
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile First",
        description: "Full access anywhere with responsive applications."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold text-sm uppercase tracking-widest mb-4"
                        >
                            The OS for Modern Schools
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text leading-tight"
                        >
                            Powerful Features. <br />
                            <span className="text-gray-400">Zen-like Experience.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <button className="hidden md:flex items-center gap-3 text-text font-bold hover:text-primary transition-colors group">
                            Explore All Features
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary transition-colors">
                                <ArrowRight size={18} />
                            </div>
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="glass group p-8 rounded-[2.5rem] hover:bg-white hover:shadow-premium transition-all duration-500 border border-white/40 cursor-default"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-text mb-4 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                {feature.description}
                            </p>
                            
                            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Learn More</span>
                                <ArrowRight size={14} className="text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
