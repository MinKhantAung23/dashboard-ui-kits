import { useState } from "react";
import { 
  LayoutDashboard, 
  LineChart, 
  Users, 
  Shield, 
  FolderGit2, 
  Settings,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";

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
      { name: "Dashboard", href: "#", icon: <LayoutDashboard className="w-5 h-5" /> },
      { name: "Analytics", href: "#", icon: <LineChart className="w-5 h-5" /> },
    ]
  },
  {
    label: "Management",
    items: [
      { 
        name: "Users", 
        icon: <Users className="w-5 h-5" />,
        children: [
          { name: "All Users", href: "#" },
          { name: "Roles & Permissions", href: "#", icon: <Shield className="w-4 h-4" /> }
        ]
      },
      { name: "Projects", href: "#", icon: <FolderGit2 className="w-5 h-5" /> },
    ]
  },
  {
    label: "Preferences",
    items: [
      { name: "Settings", href: "#", icon: <Settings className="w-5 h-5" /> },
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
          className={`group flex items-center justify-between w-full py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 transition-all duration-200
            ${isCollapsed ? 'px-0 justify-center' : 'px-3'}
          `}
          title={isCollapsed ? item.name : undefined}
        >
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {item.icon}
            </span>
            {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.name}</span>}
          </div>
          {!isCollapsed && (
            <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : ''}`} />
          )}
        </button>
        {isOpen && !isCollapsed && (
          <div className="flex flex-col mt-1.5 ml-5 pl-4 border-l border-slate-200 dark:border-dark-border space-y-1">
            {item.children.map(child => (
              <a key={child.name} href={child.href} className="group flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 whitespace-nowrap">
                {child.icon && <span className="opacity-70 group-hover:opacity-100 transition-opacity">{child.icon}</span>}
                <span className="group-hover:translate-x-1 transition-transform duration-200">{child.name}</span>
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
      className={`group flex items-center py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 transition-all duration-200
        ${isCollapsed ? 'px-0 justify-center' : 'px-3 gap-3'}
      `}
      title={isCollapsed ? item.name : undefined}
    >
      <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
        {item.icon}
      </span>
      {!isCollapsed && <span className="font-medium whitespace-nowrap group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>}
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
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 z-50 h-screen bg-white/80 dark:bg-dark-surface/80 backdrop-blur-2xl border-r border-slate-200 dark:border-dark-border transition-all duration-300 ease-in-out flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]
          ${isOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'lg:w-20' : 'lg:w-72'}
        `}
      >
        <div className="h-20 shrink-0 flex items-center justify-center border-b border-slate-200/50 dark:border-dark-border/50">
          {!isCollapsed ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 whitespace-nowrap overflow-hidden">
                DashKit<span className="text-indigo-500">.</span>
              </span>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-xl font-bold text-white">D</span>
            </div>
          )}
        </div>
        
        {/* Toggle Button for Desktop */}
        <div className="hidden lg:flex items-center justify-center p-3 border-b border-slate-200/50 dark:border-dark-border/50">
          <button 
            onClick={onToggleCollapse}
            className={`flex items-center p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 w-full ${!isCollapsed ? 'justify-between px-4' : 'justify-center'}`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {!isCollapsed && <span className="text-[11px] font-semibold uppercase tracking-widest">Collapse View</span>}
            {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
          </button>
        </div>
        
        <div className={`flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-8 ${isCollapsed ? 'px-2' : ''} custom-scrollbar`}>
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="space-y-2">
              {!isCollapsed ? (
                <h3 className="px-3 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 whitespace-nowrap">
                  {group.label}
                </h3>
              ) : (
                <div className="h-px bg-slate-200 dark:bg-dark-border my-6 w-8 mx-auto" />
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
