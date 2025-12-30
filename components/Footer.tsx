import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white pt-20 pb-8 border-t border-slate-800" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        {/* Footer Logo */}
                        <img 
                            src="https://storage.googleapis.com/msgsndr/shMiO51nYSm8IXztUM7V/media/693efcfdca7298e1a2cc9c04.png" 
                            alt="Phoenix Digital" 
                            className="h-12 w-auto object-contain mb-6 opacity-90" 
                        />
                        <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                            AI-powered booking systems for service-based businesses. Stop chasing. Start scaling.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-slate-200">Company</h4>
                        <ul className="space-y-3 text-xs text-slate-400">
                            <li><a href="#" className="hover:text-gold-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-slate-200">Resources</h4>
                        <ul className="space-y-3 text-xs text-slate-400">
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Knowledge Base</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">System Status</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-slate-200">Legal</h4>
                        <ul className="space-y-3 text-xs text-slate-400">
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 items-center pt-8 border-t border-slate-800 text-xs text-slate-500 gap-4">
                    <p className="text-center md:text-left">© 2024 Phoenix Digital Consultancy. All rights reserved.</p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
                    </div>
                    <div className="hidden md:block"></div>
                </div>
            </div>
        </footer>
    );
}