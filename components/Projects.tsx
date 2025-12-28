
import React from 'react';
import { PROJECTS, HUMAN_TAGLINES } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 sm:mb-24 text-center reveal-up">
          <div className="text-indigo-600 font-bold tracking-[0.2em] text-[10px] uppercase mb-5">Portfolio Highlight</div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">My Recent Projects.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg sm:text-xl font-light leading-relaxed text-balance">
            Engineered with a focus on high-conversion design and seamless business flows.
          </p>
          <div className="mt-4">
             <span className="text-[11px] text-slate-400 font-medium italic tracking-wide uppercase">{HUMAN_TAGLINES.projects}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className="group flex flex-col reveal-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-[32px] sm:rounded-[48px] bg-slate-200 aspect-[16/11] mb-8 lg:mb-10 shadow-sm transition-premium group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:-translate-y-2">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-indigo-900/10 transition-premium" />
              </div>
              
              <div className="px-2 sm:px-4">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-premium leading-tight">{project.title}</h3>
                <p className="text-slate-400 font-medium mb-6 text-sm italic">{project.description}</p>
                
                <div className="mb-8 lg:mb-10 p-6 sm:p-8 bg-white border border-slate-100 rounded-[24px] sm:rounded-[32px] shadow-sm">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em] block mb-3">Project Purpose</span>
                  <p className="text-slate-600 text-base leading-relaxed font-light">{project.purpose}</p>
                </div>
                
                <div className="flex">
                  <a 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full sm:w-auto overflow-hidden bg-slate-900 text-white px-8 sm:px-10 py-5 rounded-2xl text-[13px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-premium shadow-lg shadow-slate-900/10 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Experience Website
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;