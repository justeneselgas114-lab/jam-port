
import React from 'react';
import { HUMAN_TAGLINES, PROFILE_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 lg:pt-24 px-6 overflow-hidden bg-[#FCFCFD]">
      {/* Dynamic Background */}
      <div className="absolute top-[-15%] right-[-10%] -z-10 w-[70%] h-[70%] bg-indigo-50/40 rounded-full blur-[140px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] left-[-10%] -z-10 w-[50%] h-[50%] bg-slate-100/50 rounded-full blur-[120px] opacity-50" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="reveal-up space-y-10 lg:space-y-12">
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white border border-slate-200/60 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em]">Ready for International Impact</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-black text-slate-900 leading-[1.05] lg:leading-[0.95] tracking-tight">
              Modern Websites, <br />
              <span className="text-indigo-600 inline-block">Built Smarter.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 max-w-lg leading-relaxed font-light text-balance">
              Specializing in high-performance web engineering and AI integration to help founders scale with intention.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <a 
              href="#contact" 
              className="group relative bg-slate-900 text-white px-10 lg:px-12 py-5 rounded-2xl font-bold transition-premium hover:bg-indigo-600 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(79,70,229,0.3)] text-center active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start a Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="#projects" 
              className="bg-white border border-slate-200 text-slate-600 px-10 lg:px-12 py-5 rounded-2xl font-bold transition-premium hover:border-slate-300 hover:bg-slate-50 text-center active:scale-[0.98] shadow-sm"
            >
              View Results
            </a>
          </div>
          
          <div className="flex items-center space-x-12 pt-8 border-t border-slate-100">
            <div>
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.25em] mb-4">Core Focus</div>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {['High-Conversion', 'Business Flow', 'AI-Driven', 'Fast Delivery'].map((tech) => (
                  <span key={tech} className="text-xs font-bold text-slate-400 hover:text-indigo-500 transition-colors cursor-default whitespace-nowrap">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative reveal-up mt-10 lg:mt-0" style={{ animationDelay: '0.2s' }}>
          <div className="relative z-10 rounded-[40px] lg:rounded-[56px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-200 aspect-[4/5] border-8 lg:border-[12px] border-white group transition-premium">
             <img 
               src={PROFILE_IMAGE} 
               alt="Justene Selgas" 
               className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105 group-hover:brightness-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent mix-blend-overlay pointer-events-none" />
          </div>
          
          <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 w-32 h-32 sm:w-44 sm:h-44 bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl z-20 flex items-center justify-center p-4 sm:p-8 border border-slate-50 hover-float">
             <div className="text-center">
               <div className="text-2xl sm:text-3xl font-black text-slate-900">2+</div>
               <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Years of <br className="hidden sm:block"/>Impact</div>
             </div>
          </div>

          <div className="absolute -top-6 sm:-top-10 -right-4 sm:-right-10 w-28 h-28 sm:w-36 sm:h-36 bg-indigo-600 rounded-[24px] sm:rounded-[32px] shadow-indigo-600/20 shadow-2xl z-20 flex items-center justify-center p-4 sm:p-6 hover-float" style={{ transitionDelay: '0.1s' }}>
             <div className="text-center">
               <div className="text-xl sm:text-2xl font-black text-white">100%</div>
               <div className="text-[8px] sm:text-[9px] font-bold text-indigo-100 uppercase tracking-widest mt-2">Result <br className="hidden sm:block"/>Driven</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;