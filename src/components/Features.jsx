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
    Smartphone
} from 'lucide-react';

const features = [
    {
        icon: <BarChart3 size={24} />,
        title: "Attendance Management",
        description: "Track student attendance with automated systems, generate reports, and send notifications to parents instantly."
    },
    {
        icon: <BookOpen size={24} />,
        title: "Assignment Tracking",
        description: "Create, distribute, and grade assignments digitally. Monitor submission status and provide feedback seamlessly."
    },
    {
        icon: <Home size={24} />,
        title: "Homework Management",
        description: "Assign homework, track completion, and maintain detailed records of student progress across all subjects."
    },
    {
        icon: <CreditCard size={24} />,
        title: "Fee Management",
        description: "Handle fee collection, generate receipts, track payments, and send automated reminders to parents."
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Grade Records",
        description: "Maintain comprehensive grade books, calculate GPAs, and generate detailed academic performance reports."
    },
    {
        icon: <Users size={24} />,
        title: "Parent Communication",
        description: "Keep parents informed with real-time updates, notifications, and detailed progress reports."
    },
    {
        icon: <Calendar size={24} />,
        title: "Timetable Management",
        description: "Create and manage class schedules, teacher assignments, and room allocations efficiently."
    },
    {
        icon: <FileText size={24} />,
        title: "Student Records",
        description: "Maintain complete student profiles with academic history, contact information, and important documents."
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile Access",
        description: "Access the system anywhere with mobile-responsive design and dedicated mobile applications."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-text mb-4"
                    >
                        Everything You Need
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg"
                    >
                        Comprehensive tools to manage every aspect of your educational institution
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-neutral p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-text mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
