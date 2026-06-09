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

function NavItemComponent({ item, isCollapsed }: { item: NavItem, isCollapsed: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  
  if (item.children) {
    return (
      <div className="flex flex-col">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
            ${isCollapsed ? 'px-0 justify-center' : 'px-3'}
          `}
          title={isCollapsed ? item.name : undefined}
        >
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.name}</span>}
          </div>
          {!isCollapsed && (
            <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
        {isOpen && !isCollapsed && (
          <div className="flex flex-col mt-1 ml-6 pl-3 border-l border-gray-200 dark:border-gray-800 space-y-1">
            {item.children.map(child => (
              <a key={child.name} href={child.href} className="px-3 py-2 text-sm rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
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
      className={`flex items-center py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors
        ${isCollapsed ? 'px-0 justify-center' : 'px-3 gap-3'}
      `}
      title={isCollapsed ? item.name : undefined}
    >
      <span className="text-xl flex-shrink-0">{item.icon}</span>
      {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.name}</span>}
    </a>
  );
}

export function Sidebar({ 
  isOpen, 
  onClose,
  isCollapsed = false,
  onToggleCollapse
}: { 
  isOpen: boolean; 
  onClose: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}) {
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
          fixed top-0 left-0 z-50 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out flex flex-col
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
        `}
      >
        <div className="h-16 shrink-0 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
          {!isCollapsed ? (
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 whitespace-nowrap overflow-hidden">
              DashKit
            </span>
          ) : (
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">D</span>
          )}
        </div>
        
        {/* Toggle Button for Desktop - Under Logo */}
        <div className="hidden lg:flex items-center justify-center p-2 border-b border-gray-200 dark:border-gray-800">
          <button 
            onClick={onToggleCollapse}
            className={`flex items-center p-1.5 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full ${!isCollapsed ? 'justify-between px-3' : 'justify-center'}`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {!isCollapsed && <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Collapse View</span>}
            <svg className={`w-5 h-5 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div className={`flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 ${isCollapsed ? 'px-2' : ''}`}>
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="space-y-1">
              {!isCollapsed ? (
                <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 whitespace-nowrap">
                  {group.label}
                </h3>
              ) : (
                <div className="h-px bg-gray-200 dark:bg-gray-800 my-4 w-8 mx-auto" />
              )}
              {group.items.map((item) => (
                <NavItemComponent key={item.name} item={item} isCollapsed={isCollapsed} />
              ))}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
