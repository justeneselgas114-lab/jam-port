
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    vision: '',
    _hp: '' // Bot Honeypot to prevent spam
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple bot check - if hidden field is filled, ignore
    if (formData._hp !== '') {
      setStatus('submitted');
      return;
    }

    setStatus('submitting');

    try {
      const PRO_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwN3F0oohBkQ9xIXdT9leDjd-zP9EA0FvuQkHMrxFhniGXVz9hbxzIsvEDFnSemi3Nx/exec'; 

      if (PRO_APPS_SCRIPT_URL.includes('placeholder')) {
        await new Promise(r => setTimeout(r, 1500));
      } else {
        await fetch(PRO_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }

      setStatus('submitted');
      setFormData({ name: '', email: '', service: '', budget: '', vision: '', _hp: '' });
      
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-slate-950 text-white overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute -bottom-64 -right-32 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[180px] opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-slate-900/40 rounded-full blur-[140px] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="reveal-up">
            <div className="text-indigo-400 font-bold tracking-[0.25em] text-[10px] uppercase mb-6 sm:mb-8">Direct Access</div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 sm:mb-12 leading-[1.1] tracking-tight text-balance">
              Let's build your <br className="hidden sm:block"/>
              <span className="text-indigo-400/80 italic">competitive edge.</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 sm:mb-16 max-w-lg leading-relaxed font-light">
              I collaborate with business owners to turn complex problems into high-performance digital assets. Every line of code is built with commercial intention.
            </p>
            
            <div className="space-y-8 sm:space-y-10">
              <a href={`mailto:${CONTACT_INFO.email}`} className="group flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[22px] sm:rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-premium shadow-xl">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Primary Email</div>
                  <div className="text-lg sm:text-2xl font-bold text-slate-200 group-hover:text-white transition-premium break-all sm:break-normal">{CONTACT_INFO.email}</div>
                </div>
              </a>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                {[
                  { name: 'LinkedIn', url: CONTACT_INFO.linkedin },
                  { name: 'Facebook', url: CONTACT_INFO.facebook },
                  { name: 'GitHub', url: CONTACT_INFO.github }
                ].map(social => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 sm:flex-none text-center px-4 sm:px-8 py-4 sm:py-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-premium text-[10px] font-black uppercase tracking-widest min-w-[100px]"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal-up mt-8 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] opacity-10 -z-10" />
              
              <div className="bg-white p-8 sm:p-10 lg:p-14 rounded-[40px] sm:rounded-[56px] lg:rounded-[64px] shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">
                {status === 'submitted' ? (
                  <div className="text-center space-y-6 sm:space-y-8 animate-in fade-in zoom-in duration-500 px-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight tracking-tight">Brief Received.</h3>
                    <p className="text-slate-500 text-base sm:text-lg font-light leading-relaxed">
                      Thank you. Your project brief is safely logged in my system. Check your inbox for a confirmation—I'll be in touch within 24 hours.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] hover:text-slate-900 transition-colors pt-4 underline underline-offset-8"
                    >
                      New Inquiry
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                    {/* Bot Honeypot */}
                    <input type="text" name="_hp" value={formData._hp} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
                    
                    <div className="space-y-5 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-2">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                          <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="First & Last Name" className="w-full bg-slate-50 border-b border-slate-100 px-0 py-3 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-premium text-base" disabled={status === 'submitting'} />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Business Email</label>
                          <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@company.com" className="w-full bg-slate-50 border-b border-slate-100 px-0 py-3 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-premium text-base" disabled={status === 'submitting'} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-2">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Strategic Interest</label>
                          <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-slate-50 border-b border-slate-100 px-0 py-3 text-slate-900 focus:outline-none focus:border-indigo-600 transition-premium text-base appearance-none cursor-pointer" disabled={status === 'submitting'}>
                            <option value="" disabled hidden>Select Project Type</option>
                            <option>Brochure/Corporate Sites (presence, info)</option>
                            <option>E-commerce Sites (selling online)</option>
                            <option>Portfolio Sites (showcasing work)</option>
                            <option>Blog Sites (SEO, authority)</option>
                            <option>Membership Sites (premium content)</option>
                            <option>Landing Pages (conversions)</option>
                            <option>Others</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Investment Range</label>
                          <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-slate-50 border-b border-slate-100 px-0 py-3 text-slate-900 focus:outline-none focus:border-indigo-600 transition-premium text-base appearance-none cursor-pointer" disabled={status === 'submitting'}>
                            <option value="" disabled hidden>Select Investment Range</option>
                            <option>Under $2k</option>
                            <option>$2k - $5k</option>
                            <option>$5k - $10k</option>
                            <option>$10k+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Project Vision & Commercial Goals</label>
                        <textarea required name="vision" value={formData.vision} onChange={handleChange} placeholder="Describe the problem we are solving..." rows={3} className="w-full bg-slate-50 border-b border-slate-100 px-0 py-3 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-premium text-base resize-none" disabled={status === 'submitting'} />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="w-full bg-slate-900 text-white py-5 sm:py-6 rounded-2xl sm:rounded-3xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-premium shadow-xl shadow-slate-900/10 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Brief...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Initialize Collaboration
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      )}
                    </button>
                    
                    {status === 'error' && (
                      <p className="text-red-500 text-center text-[10px] font-black uppercase tracking-widest mt-4 animate-pulse">
                        Network Error. Please try again or email directly.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
