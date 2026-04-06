import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-text text-white pt-32 pb-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10" />
            
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8 group">
                            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center p-2 shadow-lg shadow-primary/20">
                                <img src="/logo/edumonklogo.svg" alt="EduMonk" className="invert" />
                            </div>
                            <span className="text-2xl font-heading font-black tracking-tight">
                                Edu<span className="text-primary">Monk</span>
                            </span>
                        </div>
                        <p className="text-gray-500 leading-relaxed mb-8 text-sm font-medium pr-4">
                            The comprehensive Academy OS designed for forward-thinking institutions. 
                            Empowering educators to focus on what truly matters: student success.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Github size={18} />, href: "https://github.com/learnwithharman" },
                                { icon: <Twitter size={18} />, href: "https://x.com/Harmxn_2005" },
                                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/harman-068394327" },
                                { icon: <Instagram size={18} />, href: "https://www.instagram.com/cozy.monkk" }
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 hover:-rotate-6 transition-all duration-300 text-gray-400 hover:text-white border border-white/5"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Platform</h4>
                        <ul className="space-y-4">
                            {["Attendance", "Assignments", "Grade Books", "Fee Management"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group text-sm font-semibold">
                                        {link}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Resources</h4>
                        <ul className="space-y-4">
                            {["Documentation", "Help Center", "Privacy Policy", "Terms of Service"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-semibold">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-gray-400">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-primary">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black text-gray-500 mb-1">Email us</p>
                                    <a href="mailto:v1ntage.monk69@gmail.com" className="text-sm font-bold hover:text-primary transition-colors underline decoration-gray-700 underline-offset-4">
                                        v1ntage.monk69@gmail.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-primary">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black text-gray-500 mb-1">Call us</p>
                                    <a href="tel:+919915012768" className="text-sm font-bold hover:text-primary transition-colors">
                                        +91 99150 12768
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs font-semibold">
                        &copy; 2025 Edumonk Academy. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 text-gray-600 text-xs font-semibold">
                        <span className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Systems Operational
                        </span>
                        <span>Built by learnwithharman</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
