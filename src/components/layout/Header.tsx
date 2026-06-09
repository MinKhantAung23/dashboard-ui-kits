import { useTheme } from "../providers/ThemeProvider";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-md lg:hidden text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold hidden sm:block text-gray-800 dark:text-gray-200">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Language Switcher Placeholder */}
        <button className="px-3 py-1.5 text-sm font-medium rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          EN
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center w-10 h-10"
          title="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        
        {/* User Profile Placeholder */}
        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-800 ml-2 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
          U
        </div>
      </div>
    </header>
  );
}
