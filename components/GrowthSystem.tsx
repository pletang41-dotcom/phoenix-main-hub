import React from 'react';

export default function GrowthSystem() {
    return (
        <section className="bg-transparent py-24" id="system">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">The 8-Week DFY Growth System</h2>
                    <p className="text-slate-500 text-sm">From audit to automated revenue in 4 sprints.</p>
                </div>

                <div className="relative">
                    {/* Line Desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200/50 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        <SystemCard 
                            step="1"
                            title="Kickoff & Setup"
                            weeks="Week 1"
                            desc="Strategy call, comprehensive audit, and immediate lead activation."
                            highlight={false}
                        />
                         <SystemCard 
                            step="2"
                            title="Booking Engine"
                            weeks="Weeks 2-3"
                            desc={(
                                <ul className="space-y-1">
                                    <li>• GlowFlow™ Nurture</li>
                                    <li>• ShowUp Shield™</li>
                                    <li>• Revive Protocol</li>
                                </ul>
                            )}
                            highlight={true}
                        />
                         <SystemCard 
                            step="3"
                            title="Optimization"
                            weeks="Weeks 4-6"
                            desc="Real-time monitoring, message refinement, and AI training."
                            highlight={false}
                        />
                         <SystemCard 
                            step="4"
                            title="Review & Scale"
                            weeks="Weeks 7-8"
                            desc="TrustTrak™ ROI review, system handoff or continued scaling."
                            highlight={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

const SystemCard = ({ step, title, weeks, desc, highlight }: { step: string, title: string, weeks: string, desc: React.ReactNode, highlight: boolean }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-slate-100/50 hover:border-gold-200 transition-all group">
        <div className={`w-10 h-10 rounded-full ${highlight ? 'bg-gold-500' : 'bg-slate-900'} text-white flex items-center justify-center font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
            {step}
        </div>
        <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-xs text-slate-500 uppercase font-medium mb-3">{weeks}</p>
        <div className="text-sm text-slate-600 leading-snug">{desc}</div>
    </div>
);