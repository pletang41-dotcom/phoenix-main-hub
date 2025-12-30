import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    return (
        <section className="bg-transparent py-24" id="faq">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-500 text-sm">Everything you need to know about the Phoenix Digital System.</p>
                </div>

                <div className="space-y-4">
                    <FAQItem 
                        question="How quickly can we launch?"
                        answer="Our rapid onboarding process takes 7 days. Day 1 is strategy, Days 2-5 are system configuration, and by Day 7, we are live and nurturing leads."
                    />
                    <FAQItem 
                        question="Does this replace my receptionist?"
                        answer="No, it empowers them. Our AI handles the repetitive 24/7 inquiry handling, follow-ups, and booking logistics, allowing your front desk to focus on providing a 5-star in-person experience."
                    />
                    <FAQItem 
                        question="Do you offer a guarantee?"
                        answer="Yes. We operate on a performance basis. If our system doesn't generate qualified booked appointments within the first 30 days, we work for free until it does."
                    />
                    <FAQItem 
                        question="Is it compatible with my current software?"
                        answer="We integrate with most major practice management software (Dentrix, Mindbody, Zenoti, etc.) via API or Zapier to ensure bookings sync directly to your calendar in real-time."
                    />
                </div>
            </div>
        </section>
    );
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
    <details className="group bg-white/40 backdrop-blur-sm rounded-xl border border-slate-200/50 hover:border-gold-300 transition-colors open:bg-white open:shadow-sm">
        <summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-slate-900">
            <span>{question}</span>
            <span className="text-slate-400 group-open:text-gold-500 group-open:rotate-180 transition-all duration-300">
                <ChevronDown size={20} />
            </span>
        </summary>
        <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">
            {answer}
        </div>
    </details>
);