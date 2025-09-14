import React, { useEffect, useState } from 'react';
import { Search, FileText, Briefcase, Wrench, Link as LinkIcon } from 'lucide-react';

const BottomNav: React.FC = () => {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const handler = () => {
      const ids = ['home', 'about', 'skills', 'services', 'portfolio'];
      const y = window.scrollY + 100;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (y >= top && y < top + h) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed left-0 right-0 bottom-4 z-50 pointer-events-none">
      <div className="px-4 flex justify-center items-center pb-[env(safe-area-inset-bottom)]">
        <div className="pointer-events-auto inline-flex bg-[#171717]/90 supports-[backdrop-filter]:backdrop-blur border border-white/10 rounded-full px-3 py-2 md:px-4 md:py-2.5 items-center gap-2 md:gap-3 shadow-lg ring-1 ring-white/5 mx-auto">
          <button
            aria-label="Home"
            onClick={() => scrollTo('home')}
            className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'home' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}
          >
            <Search className="w-5 h-5" />
            <span className="hidden md:inline">Home</span>
          </button>
          <button
            aria-label="About"
            onClick={() => scrollTo('about')}
            className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'about' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}
          >
            <FileText className="w-5 h-5" />
            <span className="hidden md:inline">About</span>
          </button>
          <button
            aria-label="Skills"
            onClick={() => scrollTo('skills')}
            className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'skills' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}
          >
            <Wrench className="w-5 h-5" />
            <span className="hidden md:inline">Skills</span>
          </button>
          <button
            aria-label="Services"
            onClick={() => scrollTo('services')}
            className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'services' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="hidden md:inline">Services</span>
          </button>
          <button
            aria-label="Portfolio"
            onClick={() => scrollTo('portfolio')}
            className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'portfolio' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}
          >
            <LinkIcon className="w-5 h-5" />
            <span className="hidden md:inline">Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
