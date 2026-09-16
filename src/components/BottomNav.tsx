import React, { useEffect, useState } from 'react';
import { Home, User, FolderGit2, Wrench, Briefcase, Mail } from 'lucide-react';

/**
 * Single source of truth for the floating nav. Both the bottom pill and the
 * right-hand rail render from this, so they can't drift apart or point at a
 * section that no longer exists.
 */
const NAV_ITEMS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: User },
  { id: 'portfolio', label: 'Work', Icon: FolderGit2 },
  { id: 'stack', label: 'Stack', Icon: Wrench },
  { id: 'services', label: 'Services', Icon: Briefcase },
  { id: 'contact', label: 'Contact', Icon: Mail },
] as const;

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const BottomNav: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [showRightBar, setShowRightBar] = useState<boolean>(false);
  const [showMorph, setShowMorph] = useState<boolean>(false);
  const [footerVisible, setFooterVisible] = useState<boolean>(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 120;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }

      const footerEl = document.getElementById('footer');
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        setFooterVisible(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Morph to the side rail once the reader is deep into the work section.
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

  useEffect(() => {
    if (showRightBar) {
      setShowMorph(true);
      const t = window.setTimeout(() => setShowMorph(false), 750);
      return () => window.clearTimeout(t);
    }
  }, [showRightBar]);

  return (
    <>
      {showMorph && (
        <>
          <div aria-hidden className="nav-morph-blob animate-nav-water fixed left-1/2 bottom-10 z-[45]" />
          <div aria-hidden className="nav-morph-blob animate-nav-water fixed right-6 top-1/2 -translate-y-1/2 z-[45]" />
        </>
      )}

      {/* Bottom pill */}
      {!showRightBar && (
        <div className="fixed left-0 right-0 bottom-4 z-50 pointer-events-none transition-all duration-500 ease-out">
          <div className="px-4 flex justify-center items-center pb-[env(safe-area-inset-bottom)]">
            <nav
              aria-label="Section navigation"
              className="pointer-events-auto inline-flex bg-[#171717]/90 supports-[backdrop-filter]:backdrop-blur border border-white/10 rounded-full px-2 py-1.5 md:px-3 md:py-2 items-center gap-1 md:gap-2 shadow-lg ring-1 ring-white/5 mx-auto max-w-[calc(100vw-2rem)] overflow-x-auto"
            >
              {NAV_ITEMS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  aria-label={label}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => scrollTo(id)}
                  className={`flex items-center gap-2 px-3 py-2 md:px-3.5 rounded-full text-sm shrink-0 transition-colors ${
                    active === id
                      ? 'bg-white text-black font-semibold'
                      : 'text-white hover:bg-[#1f1f1f]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden lg:inline">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Right-hand rail */}
      <div
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-out ${
          showRightBar
            ? 'opacity-100 translate-x-0 pointer-events-auto'
            : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <nav
          aria-label="Section navigation"
          className="flex flex-col bg-[#171717]/90 supports-[backdrop-filter]:backdrop-blur border border-white/10 rounded-2xl p-2 items-center gap-2 shadow-lg ring-1 ring-white/5"
        >
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <div key={id} className="relative group">
              <button
                aria-label={label}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => scrollTo(id)}
                className={`p-2.5 rounded-xl transition-transform duration-200 hover:scale-110 ${
                  active === id ? 'bg-white text-black' : 'text-white hover:bg-[#1f1f1f]'
                }`}
              >
                <Icon className="w-5 h-5" />
              </button>
              <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap text-sm bg-white text-black px-2 py-1 rounded-md shadow opacity-0 pointer-events-none group-hover:opacity-100 transition">
                {label}
              </span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default BottomNav;
