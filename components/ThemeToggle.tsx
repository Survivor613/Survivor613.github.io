import React, { useEffect, useState } from 'react';
import { Cloud, Star } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative h-10 w-20 rounded-full p-1 transition-all duration-500 ease-in-out focus:outline-none 
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] border border-white/10
        ${isDark ? 'bg-slate-900' : 'bg-sky-300'}
      `}
      aria-label="Toggle Dark Mode"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-full pointer-events-none">
         {/* Stars (Night) */}
         <div className={`absolute top-1.5 left-4 text-yellow-100 transition-all duration-500 ${isDark ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-0'}`}>
            <Star size={6} fill="currentColor" />
         </div>
         <div className={`absolute top-5 left-8 text-white transition-all duration-500 delay-75 ${isDark ? 'opacity-80 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-0'}`}>
            <Star size={4} fill="currentColor" />
         </div>
          <div className={`absolute bottom-2 left-3 text-white transition-all duration-500 delay-150 ${isDark ? 'opacity-60 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-0'}`}>
            <Star size={3} fill="currentColor" />
         </div>
         
         {/* Clouds (Day) */}
         <div className={`absolute top-2 right-3 text-white/90 transition-all duration-500 ${isDark ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <Cloud size={10} fill="currentColor" />
         </div>
          <div className={`absolute bottom-1.5 right-7 text-white/70 transition-all duration-500 delay-75 ${isDark ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <Cloud size={8} fill="currentColor" />
         </div>
      </div>

      {/* Sliding Thumb (Sun / Moon) */}
      <div
        className={`
          relative h-8 w-8 rounded-full shadow-md transform transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
          flex items-center justify-center z-10 overflow-hidden
          ${isDark ? 'translate-x-10 bg-slate-100' : 'translate-x-0 bg-yellow-300'}
        `}
      >
         {/* Moon Craters */}
         <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-1.5 left-2 w-2 h-2 bg-slate-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 bg-slate-300 rounded-full opacity-60"></div>
            <div className="absolute top-4 left-1.5 w-1 h-1 bg-slate-300 rounded-full opacity-60"></div>
         </div>
         
         {/* Sun Glow (CSS Shadow on container handles most of it) */}
         <div className={`absolute inset-0 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
             <div className="w-full h-full bg-yellow-300 rounded-full"></div>
         </div>
      </div>
    </button>
  );
};

export default ThemeToggle;