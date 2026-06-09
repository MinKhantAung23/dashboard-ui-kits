import { useState } from "react";

export type NavItem = {
  name: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { name: "Dashboard", href: "#", icon: "🏠" },
      { name: "Analytics", href: "#", icon: "📊" },
    ]
  },
  {
    label: "Management",
    items: [
      { 
        name: "Users", 
        icon: "👥",
        children: [
          { name: "List", href: "#" },
          { name: "Roles", href: "#" }
        ]
      },
      { name: "Projects", href: "#", icon: "📁" },
    ]
  },
  {
    label: "Settings",
    items: [
      { name: "General", href: "#", icon: "⚙️" },
    ]
  }
];

function NavItemComponent({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  
  if (item.children) {
    return (
      <div className="flex flex-col">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </div>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        {isOpen && (
          <div className="flex flex-col mt-1 ml-6 pl-3 border-l border-gray-200 dark:border-gray-800 space-y-1">
            {item.children.map(child => (
              <a key={child.name} href={child.href} className="px-3 py-2 text-sm rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {child.name}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <span className="text-lg">{item.icon}</span>
      <span className="font-medium">{item.name}</span>
    </a>
  );
}

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="h-16 shrink-0 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">DashKit</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                {group.label}
              </h3>
              {group.items.map((item) => (
                <NavItemComponent key={item.name} item={item} />
              ))}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
