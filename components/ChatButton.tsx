import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ChatButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-white text-slate-900 border border-slate-200 p-3 rounded-full shadow-2xl hover:scale-105 transition-transform group flex items-center gap-2 pr-5">
                <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white">
                    <MessageSquare size={16} />
                </div>
                <div className="text-left hidden group-hover:block animate-fade-in">
                    <span className="block text-[10px] font-bold text-slate-900">Need help?</span>
                    <span className="block text-[10px] text-slate-500">Let’s talk systems.</span>
                </div>
            </button>
        </div>
    );
}