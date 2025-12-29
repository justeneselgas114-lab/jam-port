
import React from 'react';
import { HUMAN_TAGLINES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 slide-up">
            <div className="mb-4 text-indigo-600 font-bold tracking-[0.2em] text-[10px] uppercase">My Mission</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">From Learning to Impact</h2>
            <div className="space-y-8 text-slate-600 leading-[1.7] text-lg font-light">
              <p>
                My journey began at Davao del Norte State College, where I graduated with a degree in Information Technology. Even then, my vision extended beyond the local horizon—I've always dreamed of taking my skills to the international stage to help people and businesses through the power of technology.
              </p>
              <p className="relative pl-8 border-l-2 border-indigo-100 italic text-slate-500">
                "I don't just build websites; I solve business problems. My work is built with intention, ensuring every line of code serves a commercial purpose."
              </p>
              <p>
                In a world where speed is a currency, I leverage AI-assisted development to ensure faster delivery, cleaner code, and smarter problem-solving. My focus is always on the result—helping you convert visitors into loyal customers.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-12 border-t border-slate-200 pt-12">
              <div className="group">
                <h4 className="text-4xl font-bold text-slate-900 group-hover:text-indigo-600 transition-premium">2+</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-2">Years of Excellence</p>
              </div>
              <div className="group">
                <h4 className="text-4xl font-bold text-slate-900 group-hover:text-indigo-600 transition-premium">100%</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-2">Result Driven Mindset</p>
              </div>
            </div>
            <p className="mt-8 text-xs text-slate-400 font-medium italic">
              {HUMAN_TAGLINES.about}
            </p>
          </div>
          
          <div className="order-1 lg:order-2 slide-up" style={{ animationDelay: '0.1s' }}>
             <div className="relative">
                <div className="aspect-square bg-white p-8 rounded-[48px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 relative z-10 overflow-hidden group">
                  <div className="absolute inset-0 bg-indigo-50/20 opacity-0 group-hover:opacity-100 transition-premium z-20 pointer-events-none" />
                  <img 
                      src="https://i.postimg.cc/B6jjtzVw/Untitled-design-(6).png" 
                      alt="Intentional Design" 
                      className="w-full h-full object-cover rounded-[32px] transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Accent elements */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-indigo-100/50 rounded-full blur-[80px] -z-10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-600/10 rounded-3xl -z-10 rotate-12" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
