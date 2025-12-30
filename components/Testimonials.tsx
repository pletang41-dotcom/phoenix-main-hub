import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const card = container.firstElementChild as HTMLElement;
            if (!card) return;
            
            const cardWidth = card.offsetWidth;
            const gap = 24; // gap-6
            const scrollAmount = cardWidth + gap;
            
            const currentScroll = container.scrollLeft;
            const targetScroll = direction === 'left' 
                ? currentScroll - scrollAmount 
                : currentScroll + scrollAmount;
            
            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-transparent py-24" id="results">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">System Authority</h2>
                        <p className="text-slate-500 text-sm mt-1">Real results from verified partners.</p>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full border border-slate-200/50 bg-white/40 backdrop-blur-sm flex items-center justify-center hover:bg-white text-slate-600 transition-all shadow-sm active:scale-95"
                            aria-label="Scroll Left"
                        >
                            <ChevronLeft size={18}/>
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full border border-slate-200/50 bg-white/40 backdrop-blur-sm flex items-center justify-center hover:bg-white text-slate-600 transition-all shadow-sm active:scale-95"
                            aria-label="Scroll Right"
                        >
                            <ChevronRight size={18}/>
                        </button>
                    </div>
                </div>

                {/* Container: Carousel on mobile, Grid on large screens */}
                <div 
                    ref={scrollContainerRef}
                    className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                    <TestimonialCard 
                        quote="The ShowUp Shield™ is a game changer. We reduced our no-show rate from 30% to nearly zero in the first month. The system paid for itself in week two."
                        name="Sarah Jenkins"
                        role="Founder, Lume MedSpa"
                        img="https://i.pravatar.cc/100?img=32"
                    />
                     <TestimonialCard 
                        quote="I was skeptical about 'AI automation', but Phoenix Digital set everything up perfectly. I just wake up to booked appointments on my calendar."
                        name="Dr. Mark Roberts"
                        role="Roberts Dental Group"
                        img="https://i.pravatar.cc/100?img=11"
                    />
                     <TestimonialCard 
                        quote="Scaling from 1 to 3 fitness studios was impossible until we installed the Revive Protocol. It brought back hundreds of old leads automatically."
                        name="Elena Rodriguez"
                        role="CEO, Pulse Fitness"
                        img="https://i.pravatar.cc/100?img=60"
                    />
                </div>
            </div>
        </section>
    );
}

const TestimonialCard = ({ quote, name, role, img }: { quote: string, name: string, role: string, img: string }) => (
    <div className="w-[calc(100vw-48px)] md:w-full bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-100/50 snap-center flex-none flex flex-col justify-between hover:shadow-lg transition-all duration-300">
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-gold-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <Quote size={20} className="text-slate-200" />
            </div>
            <p className="text-slate-700 mb-8 text-[15px] leading-relaxed italic">"{quote}"</p>
        </div>
        <div className="flex items-center gap-4 pt-6 border-t border-slate-100/50">
            <div className="w-12 h-12 rounded-full ring-2 ring-gold-100 overflow-hidden shrink-0">
                <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden">
                <div className="font-bold text-slate-900 text-sm truncate">{name}</div>
                <div className="text-xs text-slate-500 truncate">{role}</div>
            </div>
        </div>
    </div>
);