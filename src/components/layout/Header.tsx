"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, Sun, Moon, Globe, Bell, Search, User, Settings, LogOut } from "lucide-react";

// Hook to handle outside clicks for dropdowns
function useOnClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [lang, setLang] = useState('EN');
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(langRef, () => setIsLangOpen(false));
  useOnClickOutside(themeRef, () => setIsThemeOpen(false));
  useOnClickOutside(profileRef, () => setIsProfileOpen(false));

  // Handle manual theme toggle
  useEffect(() => {
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 h-14 bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-6 transition-colors duration-300">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-slate-500 hover:text-slate-900 dark:hover:text-white p-2 -ml-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-md border border-transparent focus-within:border-blue-500/50 focus-within:bg-white dark:focus-within:bg-[#09090b] transition-all w-64">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none text-xs w-full text-slate-900 dark:text-white placeholder:text-slate-400"
          />
          <div className="flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-[#09090b] border border-slate-200 dark:border-slate-700 text-slate-500">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 lg:gap-2">
        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white dark:border-[#09090b]"></span>
        </button>

        <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

        {/* Language Switcher */}
        <div className="relative" ref={langRef}>
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="inline-flex items-center justify-center gap-1.5 px-2 h-8 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white font-medium text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang}</span>
          </button>
          
          {isLangOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-[#09090b] border border-slate-200 dark:border-slate-800 rounded-md shadow-lg py-1 z-[100]">
              <button 
                onClick={() => { setLang('EN'); setIsLangOpen(false); }}
                className="w-full text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                English (EN)
              </button>
              <button 
                onClick={() => { setLang('MM'); setIsLangOpen(false); }}
                className="w-full text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Myanmar (MM)
              </button>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <div className="relative" ref={themeRef}>
          <button 
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </button>

          {isThemeOpen && (
            <div className="absolute right-0 mt-1 w-32 bg-white dark:bg-[#09090b] border border-slate-200 dark:border-slate-800 rounded-md shadow-lg py-1 z-[100]">
              <button onClick={() => { setTheme('light'); setIsThemeOpen(false); }} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Light</button>
              <button onClick={() => { setTheme('dark'); setIsThemeOpen(false); }} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Dark</button>
              <button onClick={() => { setTheme('system'); setIsThemeOpen(false); }} className="w-full text-left px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">System</button>
            </div>
          )}
        </div>
        
        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="inline-flex items-center gap-2 rounded-full lg:rounded-md p-1 lg:pr-2 ml-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">JD</span>
            </div>
            <div className="hidden lg:flex flex-col items-start text-left">
              <span className="text-xs font-medium text-slate-900 dark:text-white leading-none">John Doe</span>
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-1 w-56 bg-white dark:bg-[#09090b] border border-slate-200 dark:border-slate-800 rounded-md shadow-lg py-1 z-[100]">
              <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
                <p className="text-sm font-medium text-slate-900 dark:text-white">John Doe</p>
                <p className="text-xs text-slate-500">john.doe@example.com</p>
              </div>
              <div className="py-1 border-b border-slate-100 dark:border-slate-800">
                <button className="w-full flex items-center px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <User className="mr-2 h-3.5 w-3.5" /> Profile
                </button>
                <button className="w-full flex items-center px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Settings className="mr-2 h-3.5 w-3.5" /> Settings
                </button>
              </div>
              <div className="py-1">
                <button className="w-full flex items-center px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-500/10">
                  <LogOut className="mr-2 h-3.5 w-3.5" /> Log out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
