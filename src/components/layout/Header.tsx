import { useState, useRef, useEffect } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Menu, Sun, Moon, Globe, Bell, Search } from "lucide-react";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, setTheme } = useTheme();
  const [lang, setLang] = useState('EN');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 h-20 bg-white/70 dark:bg-[#0B0F19]/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-dark-border/50 flex items-center justify-between px-4 lg:px-8 transition-colors duration-300">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-xl lg:hidden text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Search Bar Placeholder */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-dark-surface rounded-full border border-transparent focus-within:border-indigo-500/50 focus-within:bg-white dark:focus-within:bg-[#0B0F19] transition-all w-96 max-w-md shadow-inner dark:shadow-none">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none focus:outline-none text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400"
          />
          <div className="flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-full text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-[#0B0F19]"></span>
        </button>

        <div className="h-6 w-px bg-slate-200 dark:bg-dark-border mx-1"></div>

        {/* Language Switcher */}
        <button 
          onClick={() => setLang(lang === 'EN' ? 'MM' : 'EN')}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-surface transition-all"
          title="Change Language"
        >
          <Globe className="w-4 h-4 text-slate-400" />
          <span>{lang}</span>
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full text-slate-500 hover:text-amber-500 dark:hover:text-indigo-400 hover:bg-amber-50 dark:hover:bg-indigo-500/10 transition-all"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        {/* Profile Dropdown */}
        <div className="relative ml-2" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-dark-surface transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-100 to-violet-100 dark:from-indigo-900/50 dark:to-violet-900/50 border border-indigo-200/50 dark:border-indigo-700/50 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-sm shadow-sm">
              JD
            </div>
            <div className="hidden lg:block text-left mr-2">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-none">John Doe</p>
              <p className="text-[11px] text-slate-400 mt-1 leading-none">Admin</p>
            </div>
          </button>
          
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-dark-surface rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] py-2 border border-slate-200 dark:border-dark-border focus:outline-none transform opacity-100 scale-100 transition-all origin-top-right">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-dark-border/50 mb-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">John Doe</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">john.doe@example.com</p>
              </div>
              <div className="px-2">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                  My Profile
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors">
                  Account Settings
                </a>
              </div>
              <div className="border-t border-slate-100 dark:border-dark-border/50 my-1 mx-2"></div>
              <div className="px-2">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors">
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
