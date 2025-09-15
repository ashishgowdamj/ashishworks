import React, { useEffect, useState } from 'react';
import { Home, FileText, Briefcase, Wrench, Link as LinkIcon } from 'lucide-react';

const BottomNav: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [showRightBar, setShowRightBar] = useState<boolean>(false);
  const [footerVisible, setFooterVisible] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => {
      const ids = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
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

      // Independently track if contact section is visible at all
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        // no longer stored, but can be used later if needed
      }

      // Track footer visibility (show right bar immediately when in view)
      const footerEl = document.getElementById('footer');
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        setFooterVisible(inView);
      }
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Delay morph to right bar by 1s after entering Projects, or immediately when footer is visible
  useEffect(() => {
    let t: number | undefined;
    if (footerVisible) {
      setShowRightBar(true);
    } else if (active === 'portfolio') {
      t = window.setTimeout(() => setShowRightBar(true), 1000);
    } else {
      setShowRightBar(false);
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [active, footerVisible]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isRightBar = showRightBar;

  return (
    <>
      {/* Bottom pill (render only when right bar is not active) */}
      {!isRightBar && (
        <div className={`fixed left-0 right-0 bottom-4 z-50 pointer-events-none transition-all duration-500 ease-out`}>
          <div className="px-4 flex justify-center items-center pb-[env(safe-area-inset-bottom)]">
            <div className={`pointer-events-auto inline-flex bg-[#171717]/90 supports-[backdrop-filter]:backdrop-blur border border-white/10 rounded-full px-3 py-2 md:px-4 md:py-2.5 items-center gap-2 md:gap-3 shadow-lg ring-1 ring-white/5 mx-auto`}>
              <button aria-label="Home" onClick={() => scrollTo('home')} className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'home' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}>
                <Home className="w-5 h-5" />
                <span className="hidden md:inline">Home</span>
              </button>
              <button aria-label="About" onClick={() => scrollTo('about')} className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'about' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}>
                <FileText className="w-5 h-5" />
                <span className="hidden md:inline">About</span>
              </button>
              <button aria-label="Skills" onClick={() => scrollTo('skills')} className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'skills' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}>
                <Wrench className="w-5 h-5" />
                <span className="hidden md:inline">Skills</span>
              </button>
              <button aria-label="Services" onClick={() => scrollTo('services')} className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'services' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}>
                <Briefcase className="w-5 h-5" />
                <span className="hidden md:inline">Services</span>
              </button>
              <button aria-label="Projects" onClick={() => scrollTo('portfolio')} className={`flex items-center gap-2 md:gap-3 px-3.5 py-2 md:px-4 rounded-full text-sm md:text-base ${active === 'portfolio' ? 'bg-white text-black font-semibold' : 'text-white hover:bg-[#1f1f1f]'}`}>
                <LinkIcon className="w-5 h-5" />
                <span className="hidden md:inline">Projects</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Right-side vertical icons (cross-fade in on Projects after delay) */}
      <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-out ${isRightBar ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'}`}>
        <div className="flex flex-col bg-[#171717]/90 supports-[backdrop-filter]:backdrop-blur border border-white/10 rounded-2xl p-2 items-center gap-2 shadow-lg ring-1 ring-white/5">
          <div className="relative group">
            <button aria-label="Home" onClick={() => scrollTo('home')} className="p-2 rounded-xl text-white hover:bg-[#1f1f1f] transition-transform duration-200 hover:scale-110">
              <Home className="w-5 h-5" />
            </button>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap text-xs bg-white text-black px-2 py-1 rounded-md shadow opacity-0 pointer-events-none group-hover:opacity-100 transition">Home</span>
          </div>
          <div className="relative group">
            <button aria-label="About" onClick={() => scrollTo('about')} className="p-2 rounded-xl text-white hover:bg-[#1f1f1f] transition-transform duration-200 hover:scale-110">
              <FileText className="w-5 h-5" />
            </button>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap text-xs bg-white text-black px-2 py-1 rounded-md shadow opacity-0 pointer-events-none group-hover:opacity-100 transition">About</span>
          </div>
          <div className="relative group">
            <button aria-label="Skills" onClick={() => scrollTo('skills')} className="p-2 rounded-xl text-white hover:bg-[#1f1f1f] transition-transform duration-200 hover:scale-110">
              <Wrench className="w-5 h-5" />
            </button>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap text-xs bg-white text-black px-2 py-1 rounded-md shadow opacity-0 pointer-events-none group-hover:opacity-100 transition">Skills</span>
          </div>
          <div className="relative group">
            <button aria-label="Services" onClick={() => scrollTo('services')} className="p-2 rounded-xl text-white hover:bg-[#1f1f1f] transition-transform duration-200 hover:scale-110">
              <Briefcase className="w-5 h-5" />
            </button>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap text-xs bg-white text-black px-2 py-1 rounded-md shadow opacity-0 pointer-events-none group-hover:opacity-100 transition">Services</span>
          </div>
          <div className="relative group">
            <button aria-label="Projects" onClick={() => scrollTo('portfolio')} className="p-2 rounded-xl bg-white text-black transition-transform duration-200 hover:scale-110">
              <LinkIcon className="w-5 h-5" />
            </button>
            <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap text-xs bg-white text-black px-2 py-1 rounded-md shadow opacity-0 pointer-events-none group-hover:opacity-100 transition">Projects</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
