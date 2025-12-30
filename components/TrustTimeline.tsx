import React from 'react';
import { Rocket, Bot, CalendarCheck, TrendingUp } from 'lucide-react';

export default function TrustTimeline() {
    return (
        <section className="bg-transparent py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <TimelineItem icon={Rocket} title="Launch" subtitle="Setup in 7 Days" />
                    <TimelineItem icon={Bot} title="Automate" subtitle="24/7 Lead Nurture" />
                    <TimelineItem icon={CalendarCheck} title="Book" subtitle="ShowUp Shield™" />
                    <TimelineItem icon={TrendingUp} title="Grow" subtitle="Scale Revenue" />
                </div>
            </div>
        </section>
    );
}

const TimelineItem = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
    <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-white/40 border border-slate-200/30 flex items-center justify-center text-gold-500">
            <Icon size={16} />
        </div>
        <div className="flex flex-col">
            <span className="text-xs font-semibold text-slate-900 uppercase">{title}</span>
            <span className="text-xs text-slate-500">{subtitle}</span>
        </div>
    </div>
);