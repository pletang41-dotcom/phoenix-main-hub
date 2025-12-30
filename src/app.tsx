import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustTimeline from './components/TrustTimeline';
import IndustryCards from './components/IndustryCards';
import ROICalculator from './components/ROICalculator';
import GrowthSystem from './components/GrowthSystem';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

export default function App() {
  useEffect(() => {
    // Dynamically load the Unicorn Studio script to ensure it runs after React mounts the div
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    script.async = true;
    script.onload = () => {
        if ((window as any).UnicornStudio) {
            (window as any).UnicornStudio.init();
        }
    };
    document.body.appendChild(script);

    // Backup check to ensure initialization happens if script loads very fast or from cache
    const initInterval = setInterval(() => {
        if ((window as any).UnicornStudio) {
            (window as any).UnicornStudio.init();
        }
    }, 1000);

    const timeout = setTimeout(() => {
        clearInterval(initInterval);
    }, 5000);

    return () => {
        document.body.removeChild(script);
        clearInterval(initInterval);
        clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 
         Unicorn Studio Background
         bg-slate-50: Provides the light grey base color.
         opacity-20: Washes out the dark unicorn animation so it blends with the light base.
      */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-slate-50">
        <div 
            data-us-project="X0ErZR3QhPzMHfKgBbJJ" 
            className="w-full h-full opacity-20"
        ></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <TrustTimeline />
        <IndustryCards />
        <ROICalculator />
        <GrowthSystem />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
}
