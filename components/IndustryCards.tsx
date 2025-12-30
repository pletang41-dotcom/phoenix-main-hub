import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, Smile, Dumbbell } from 'lucide-react';

export default function IndustryCards() {
    return (
        <section className="relative pt-24 pb-24" id="services">
            {/* Background Layer with blending */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7673e8dd-9bec-4141-a633-6743d6877baa_1600w.webp)] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="md:text-3xl text-2xl font-semibold text-slate-900 tracking-tight mb-4">Tailored Systems by Industry</h2>
                    <p className="text-slate-500 text-sm max-w-lg mx-auto">Select your business type to see how we automate your specific client journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Med Spa */}
                    <FlipCard 
                        icon={Sparkles}
                        iconColorClass="text-gold-600 bg-gold-100"
                        title="Med Spas"
                        description="High-ticket aesthetic treatments require trust. Our AI builds rapport before they even book."
                        funnelTitle="Med Spa Funnel"
                        checklist={["Consult Booking", "Deposit Collection", "Post-Care Nurture"]}
                        actionColor="text-gold-600"
                        btnBg="bg-gold-500"
                    />

                    {/* Card 2: Dentist */}
                    <FlipCard 
                        icon={Smile}
                        iconColorClass="text-blue-600 bg-blue-50"
                        title="Dental Practices"
                        description="Fill hygiene chairs and attract high-value Invisalign/Implant cases automatically."
                        funnelTitle="Dental Funnel"
                        checklist={["New Patient Offer", "Recall Automation", "Review Generation"]}
                        actionColor="text-blue-600"
                        btnBg="bg-gold-500"
                    />

                    {/* Card 3: Fitness */}
                    <FlipCard 
                        icon={Dumbbell}
                        iconColorClass="text-emerald-600 bg-emerald-50"
                        title="Fitness Studios"
                        description="Pack your classes and convert trial members into long-term contracts seamlessly."
                        funnelTitle="Fitness Funnel"
                        checklist={["Challenge Opt-ins", "Class Reminders", "Upsell Sequences"]}
                        actionColor="text-emerald-600"
                        btnBg="bg-gold-500"
                    />
                </div>
            </div>
        </section>
    );
}

interface FlipCardProps {
    icon: any;
    iconColorClass: string;
    title: string;
    description: string;
    funnelTitle: string;
    checklist: string[];
    actionColor: string;
    btnBg: string;
}

const FlipCard = ({ icon: Icon, iconColorClass, title, description, funnelTitle, checklist, actionColor, btnBg }: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="h-80 perspective-container cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div 
                className="relative w-full h-full shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out rounded-2xl"
                style={{ 
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front */}
                <div 
                    className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-between border border-slate-200/50"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    <div>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${iconColorClass}`}>
                            <Icon size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                        <p className="mt-4 text-sm text-slate-500 leading-relaxed">{description}</p>
                    </div>
                    <div className={`flex items-center text-xs font-medium ${actionColor}`}>
                        View Strategy <ArrowRight className="ml-2" size={14} />
                    </div>
                </div>
                {/* Back */}
                <div 
                    className="absolute inset-0 bg-slate-900 rounded-2xl p-8 flex flex-col justify-center text-center items-center"
                    style={{ 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <h4 className="text-white font-medium mb-4">{funnelTitle}</h4>
                    <ul className="text-slate-300 text-sm space-y-2 mb-6 text-left w-full pl-4">
                        {checklist.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check size={14} className="text-gold-500" /> {item}
                            </li>
                        ))}
                    </ul>
                    <button className={`${btnBg} text-white px-4 py-2 rounded-lg text-xs font-semibold w-full`}>See How It Works</button>
                </div>
            </div>
        </div>
    );
};