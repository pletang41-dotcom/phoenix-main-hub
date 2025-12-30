import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex-1 flex justify-start">
                    <a href="#" className="flex items-center gap-2 group">
                        <img 
                            src="https://storage.googleapis.com/msgsndr/shMiO51nYSm8IXztUM7V/media/693efcfdca7298e1a2cc9c04.png" 
                            alt="Phoenix Digital" 
                            className="h-10 w-auto object-contain" 
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 leading-none tracking-tight">PHOENIX</span>
                            <span className="text-[10px] text-slate-500 font-medium tracking-wider">DIGITAL CONSULTANCY</span>
                        </div>
                    </a>
                </div>

                {/* Desktop Links - Centered */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#services" className="hover:text-gold-600 transition-colors">Services</a>
                    <a href="#system" className="hover:text-gold-600 transition-colors">The System</a>
                    <a href="#results" className="hover:text-gold-600 transition-colors">Case Studies</a>
                    <a href="#blog" className="hover:text-gold-600 transition-colors">Blog</a>
                    <a href="#faq" className="hover:text-gold-600 transition-colors">FAQ</a>
                </div>

                {/* CTA - Right Aligned */}
                <div className="flex-1 flex justify-end items-center gap-4">
                    <a href="#contact" className="hidden sm:flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        <span>Book Strategy Call</span>
                        <ArrowRight size={16} strokeWidth={2} />
                    </a>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-slate-900 p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 animate-fade-in">
                    <a href="#services" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#system" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>The System</a>
                    <a href="#results" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
                    <a href="#blog" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>Blog</a>
                    <a href="#faq" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                    <a href="#contact" className="text-gold-600 font-bold py-2" onClick={() => setIsMenuOpen(false)}>Book Strategy Call</a>
                </div>
            )}
        </nav>
    );
}