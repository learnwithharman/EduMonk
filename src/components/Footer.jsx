import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-text text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo/edumonklogo.svg" alt="EduMonk" className="h-10" />
                            <span className="text-2xl font-heading font-bold text-white">EduMonk</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Transforming education through innovative school management solutions.
                            Empowering schools to focus on what matters most - quality education.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/learnwithharman" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://x.com/Harmxn_2005?t=uj9RWMaPmmPKewzrNFm9Qg&s=08" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/harman-068394327?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/cozy.monkk?igsh=MWl2dDJoZ3Z1dzk2cA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Features Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Features</h4>
                        <ul className="space-y-4">
                            <li><a href="#attendance" className="text-gray-400 hover:text-primary transition-colors">Attendance Management</a></li>
                            <li><a href="#assignments" className="text-gray-400 hover:text-primary transition-colors">Assignment Tracking</a></li>
                            <li><a href="#homework" className="text-gray-400 hover:text-primary transition-colors">Homework Management</a></li>
                            <li><a href="#fees" className="text-gray-400 hover:text-primary transition-colors">Fee Management</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="#help" className="text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
                            <li><a href="#docs" className="text-gray-400 hover:text-primary transition-colors">Documentation</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact Support</a></li>
                            <li><a href="#training" className="text-gray-400 hover:text-primary transition-colors">Training Resources</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail size={20} className="text-primary shrink-0 mt-1" />
                                <span>v1ntage.monk69@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone size={20} className="text-primary shrink-0 mt-1" />
                                <span>+91 9915012768</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                <span>#120 st. no 10 amarjeet colony rahon road ludhiana punjab 141007</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500">
                    <p>&copy; 2025 EduMonk. All rights reserved. Built with ❤️ for education.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
