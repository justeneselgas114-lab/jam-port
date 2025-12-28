
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 sm:mb-24 text-center reveal-up">
          <div className="text-indigo-600 font-bold tracking-[0.25em] text-[10px] uppercase mb-5">Strategic Capabilities</div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Expertise for Growth.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed">
            A deliberately chosen ecosystem of methodologies designed to optimize for speed, security, and commercial impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-24">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={category.title} 
              className="relative p-2 reveal-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-xl font-black text-slate-900 mb-8 sm:mb-10 flex items-center">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full mr-4 opacity-20 group-hover:opacity-100 transition-premium" />
                {category.title}
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-slate-500 flex items-center text-[15px] font-medium transition-premium hover:text-indigo-600 hover:translate-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-4 group-hover:bg-indigo-400 group-hover:scale-125 transition-premium" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-[40px] sm:rounded-[64px] bg-slate-900 text-white overflow-hidden reveal-up shadow-2xl">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-slate-500/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/20 mb-6 lg:mb-8">
                Future-Proofing
              </div>
              <h3 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 leading-tight">AI-Enhanced <br className="hidden sm:block"/>Development Lifecycle</h3>
              <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-md">
                Leveraging artificial intelligence to accelerate feature delivery while ensuring code quality remains stable and secure for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:justify-end">
               {['Efficiency', 'Precision', 'Security', 'Scale'].map((trait, i) => (
                 <div key={trait} className="p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] bg-white/5 border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-premium hover:-translate-y-2">
                    <span className="text-indigo-400 font-black text-xl sm:text-2xl mb-1">{i + 1}</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{trait}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;