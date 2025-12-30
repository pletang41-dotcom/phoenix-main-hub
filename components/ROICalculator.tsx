import React, { useState, useEffect } from 'react';
import { Hammer } from 'lucide-react';

export default function ROICalculator() {
    const [leads, setLeads] = useState(1000);
    const [ticket, setTicket] = useState(300);
    const [conversion, setConversion] = useState(2.0);

    const [roiData, setRoiData] = useState({
        currentRevenue: 0,
        potentialRevenue: 0,
        uplift: '0.0',
        hCurrent: 0,
        hPotential: 0
    });

    useEffect(() => {
        const currentBookings = Math.round(leads * (conversion / 100));
        const currentRevenue = currentBookings * ticket;

        // Logic from original code: AI Rate = (Current Rate * 1.5) + 5% capped at 40
        let potentialConv = (conversion * 1.5) + 5;
        if (potentialConv > 40) potentialConv = 40;

        const potentialBookings = Math.round(leads * (potentialConv / 100));
        const potentialRevenue = potentialBookings * ticket;

        const multiplier = currentRevenue > 0 ? (potentialRevenue / currentRevenue).toFixed(1) : '0.0';

        const maxRef = potentialRevenue * 1.2;
        const hCurrent = Math.max((currentRevenue / maxRef) * 100, 5);
        const hPotential = Math.max((potentialRevenue / maxRef) * 100, 5);

        setRoiData({
            currentRevenue,
            potentialRevenue,
            uplift: multiplier,
            hCurrent,
            hPotential
        });
    }, [leads, ticket, conversion]);

    const formatCurrency = (val: number) => {
        if (val >= 1000000) return '$' + (val / 1000000).toFixed(1) + 'M';
        if (val >= 1000) return '$' + (val / 1000).toFixed(0) + 'k';
        return '$' + val;
    };

    return (
        <section className="overflow-hidden bg-transparent pt-24 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="lg:p-12 bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                        {/* Left: Controls */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Conversion Engine Visualizer</h2>
                                <p className="text-slate-400 text-sm">Adjust parameters to see your potential growth with Phoenix Digital.</p>
                            </div>

                            {/* Form/Inputs */}
                            <div className="space-y-6">
                                {/* Slider 1: Traffic */}
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Monthly Traffic (Leads)</label>
                                    <input 
                                        type="range" 
                                        min="100" 
                                        max="5000" 
                                        step="100" 
                                        value={leads}
                                        onChange={(e) => setLeads(Number(e.target.value))}
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>100</span>
                                        <span className="text-gold-400 font-bold">{leads.toLocaleString()}</span>
                                        <span>5,000+</span>
                                    </div>
                                </div>

                                {/* Slider 2: Average Ticket Value */}
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Average Ticket Value</label>
                                    <input 
                                        type="range" 
                                        min="50" 
                                        max="2000" 
                                        step="50" 
                                        value={ticket}
                                        onChange={(e) => setTicket(Number(e.target.value))}
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>$50</span>
                                        <span className="text-gold-400 font-bold">${ticket.toLocaleString()}</span>
                                        <span>$2,000</span>
                                    </div>
                                </div>

                                {/* Slider 3: Current Conversion */}
                                <div>
                                    <label className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">Current Conversion Rate</label>
                                    <input 
                                        type="range" 
                                        min="0.5" 
                                        max="10" 
                                        step="0.5" 
                                        value={conversion}
                                        onChange={(e) => setConversion(Number(e.target.value))}
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>0.5%</span>
                                        <span className="text-gold-400 font-bold">{conversion.toFixed(1)}%</span>
                                        <span>10%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-800">
                                <button className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20">
                                    Build My System
                                    <Hammer size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Right: Visualizer Output */}
                        <div className="lg:p-8 flex flex-col bg-slate-800/50 border-slate-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6 justify-center">
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-800 border-slate-700 border rounded-xl pt-4 pr-4 pb-4 pl-4 relative overflow-hidden group">
                                    <span className="text-xs text-slate-400 block mb-1">Current Revenue</span>
                                    <span className="text-xl md:text-2xl font-bold text-white tracking-tight">{formatCurrency(roiData.currentRevenue)}</span>
                                </div>
                                <div className="p-4 bg-slate-800 rounded-xl border border-gold-500/30 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gold-500/5 z-0"></div>
                                    <span className="text-xs text-gold-200 block mb-1 relative z-10">Potential Revenue</span>
                                    <span className="text-xl md:text-2xl font-bold text-gold-400 tracking-tight relative z-10">{formatCurrency(roiData.potentialRevenue)}</span>
                                    <span className="absolute top-4 right-4 text-[10px] text-green-400 bg-green-900/40 px-1.5 py-0.5 rounded border border-green-800">+{roiData.uplift}x</span>
                                </div>
                            </div>
                            
                            {/* Comparison Graph Visualization */}
                            <div className="h-40 flex items-end justify-around gap-6 px-4 pt-4 border-b border-slate-700/50 relative">
                                {/* Dashed lines for scale */}
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-4">
                                    <div className="w-full h-px bg-slate-500 border-t border-dashed"></div>
                                    <div className="w-full h-px bg-slate-500 border-t border-dashed"></div>
                                    <div className="w-full h-px bg-slate-500 border-t border-dashed"></div>
                                </div>

                                {/* Current Bar */}
                                <div className="w-20 relative flex flex-col justify-end h-full group">
                                    <div 
                                        className="w-full bg-slate-600/60 rounded-t-md transition-all duration-500 ease-out" 
                                        style={{ height: `${roiData.hCurrent}%` }}
                                    ></div>
                                    <div className="text-center mt-3 text-[10px] text-slate-400 uppercase tracking-wider">Current</div>
                                </div>

                                {/* Potential Bar */}
                                <div className="w-20 relative flex flex-col justify-end h-full group">
                                    <div 
                                        className="w-full bg-gradient-to-t from-gold-600 to-gold-400 rounded-t-md relative shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 ease-out" 
                                        style={{ height: `${roiData.hPotential}%` }}
                                    >
                                        <div className="absolute -top-6 left-0 right-0 text-center text-[10px] text-gold-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">With AI</div>
                                    </div>
                                    <div className="text-center mt-3 text-[10px] text-white font-semibold uppercase tracking-wider">With AI</div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-slate-500 mt-6">Projected growth based on 60-day implementation data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}