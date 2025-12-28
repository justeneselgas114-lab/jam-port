
import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Insights', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
      if (isAtBottom) {
        setActiveSection('#contact');
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -70% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;
        if (entry.isIntersecting && !isAtBottom) {
          const id = entry.target.id;
          setActiveSection(id === 'home' ? '' : `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'glass-nav py-4 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border-b border-slate-200/30' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-black tracking-tighter text-slate-900 group flex items-center z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 bg-slate-900 rounded-lg mr-3 flex items-center justify-center group-hover:bg-indigo-600 transition-premium">
            <span className="text-white text-xs font-black">JS</span>
          </div>
          <span className="hidden sm:inline">Justene</span> <span className="text-slate-400 font-light ml-1 group-hover:text-indigo-400 transition-premium">Selgas</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2 bg-slate-100/30 p-1.5 rounded-full border border-slate-200/20">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a 
                key={item.name}
                href={item.href} 
                className={`relative px-5 py-2 text-[13px] font-bold transition-premium rounded-full ${
                  isActive 
                    ? 'text-indigo-600 bg-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-indigo-600 rounded-full active-dot" />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="#contact" 
            className="hidden sm:block bg-slate-900 text-white px-7 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-indigo-600 transition-premium shadow-lg shadow-slate-900/10 active:scale-95"
          >
            Let's Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-slate-900 rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-slate-900 rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-slate-900 rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6 text-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-4xl font-black text-slate-900 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full max-w-xs bg-slate-900 text-white py-6 rounded-[32px] text-sm font-black uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;