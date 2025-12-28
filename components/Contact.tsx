
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vision: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      /**
       * STEP 5: PASTE YOUR GOOGLE APPS SCRIPT URL HERE
       * Example: 'https://script.google.com/macros/s/XXXXXXX/exec'
       */
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzDaGdK99Yo7gXv7dPu5DvBQeFYQaQ5JdE3jXzWOHxaDWzz-KryMZFYQtXPrT6VlCY1/exec'; 

      // We use 'no-cors' if your script doesn't handle preflight, 
      // but standard Apps Script doPost works best with standard fetch + JSON
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script often requires no-cors for simple redirects
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Since 'no-cors' doesn't return a standard response status,
      // we assume success if the fetch doesn't throw an error.
      // If you use standard CORS in your script, you'd check response.ok
      setStatus('submitted');
      setFormData({ name: '', email: '', vision: '' });
      
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute -bottom-64 -right-32 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[180px] opacity-40" />
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-slate-900/40 rounded-full blur-[140px] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="reveal-up">
            <div className="text-indigo-400 font-bold tracking-[0.25em] text-[10px] uppercase mb-8">Strategic Partnerships</div>
            <h2 className="text-6xl lg:text-7xl font-black mb-12 leading-[1.05] tracking-tight">Let's build your <span className="text-indigo-400/80 italic">competitive edge.</span></h2>
            <p className="text-xl text-slate-400 mb-16 max-w-lg leading-relaxed font-light">
              I collaborate with forward-thinking business owners to turn complex problems into elegant digital assets.
            </p>
            
            <div className="space-y-10">
              <a href={`mailto:${CONTACT_INFO.email}`} className="group flex items-center space-x-8">
                <div className="w-16 h-16 rounded-[28px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-600 transition-premium shadow-xl">
                  <svg className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Direct Channel</div>
                  <div className="text-2xl font-bold text-slate-200 group-hover:text-white transition-premium">{CONTACT_INFO.email}</div>
                </div>
              </a>

              <div className="flex gap-4 pt-6">
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
                    className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-premium text-xs font-black uppercase tracking-widest"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="reveal-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-premium -z-10" />
              
              <div className="bg-white p-12 lg:p-16 rounded-[64px] shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">
                {status === 'submitted' ? (
                  <div className="text-center space-y-8 reveal-up">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 leading-tight">Vision Logged.</h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                      Your brief has been successfully synchronized with my database. I'll review your goals and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] hover:text-slate-900 transition-colors pt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-10" onSubmit={handleSubmit}>
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="E.g. Marcus Aurelius" 
                            className="w-full bg-slate-50 border-b border-slate-100 px-0 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-premium text-lg"
                            disabled={status === 'submitting'}
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Business Email</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@company.com" 
                            className="w-full bg-slate-50 border-b border-slate-100 px-0 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-premium text-lg"
                            disabled={status === 'submitting'}
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">The Vision</label>
                        <textarea 
                          required
                          name="vision"
                          value={formData.vision}
                          onChange={handleChange}
                          rows={4} 
                          placeholder="Tell me about your project goals..." 
                          className="w-full bg-slate-50 border-b border-slate-100 px-0 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-600 transition-premium text-lg resize-none"
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>
                    
                    {status === 'error' && (
                      <p className="text-red-500 text-xs font-bold animate-pulse">
                        Network error. Please try again or email me directly.
                      </p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className={`w-full text-white font-black py-6 rounded-3xl transition-premium shadow-xl active:scale-[0.98] flex items-center justify-center space-x-3 ${
                        status === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-slate-900 shadow-indigo-600/20'
                      }`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Logging Brief...</span>
                        </>
                      ) : (
                        <span>Initiate Project Brief</span>
                      )}
                    </button>
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
