"use client";

import Link from "next/link";
import { 
  LayoutDashboard, 
  LineChart, 
  Users, 
  Shield, 
  FolderGit2, 
  Settings,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";

export type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { name: "Dashboard", href: "/", icon: <LayoutDashboard className="w-5 h-5" />, isActive: true },
      { name: "Analytics", href: "/analytics", icon: <LineChart className="w-5 h-5" /> },
    ]
  },
  {
    label: "Management",
    items: [
      { name: "All Users", href: "/users", icon: <Users className="w-5 h-5" /> },
      { name: "Roles & Permissions", href: "/roles", icon: <Shield className="w-5 h-5" /> },
      { name: "Projects", href: "/projects", icon: <FolderGit2 className="w-5 h-5" /> },
    ]
  },
  {
    label: "Preferences",
    items: [
      { name: "Settings", href: "/settings", icon: <Settings className="w-5 h-5" /> },
    ]
  }
];

function NavItemComponent({ item, isCollapsed }: { item: NavItem, isCollapsed: boolean }) {
  return (
    <Link
      href={item.href}
      className={`group flex items-center py-2.5 rounded-lg transition-all duration-200 ${
        isCollapsed ? 'px-0 justify-center' : 'px-3 gap-3'
      } ${
        item.isActive 
          ? "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 font-semibold" 
          : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
      }`}
      title={isCollapsed ? item.name : undefined}
    >
      <span className={`flex-shrink-0 transition-transform duration-200 group-hover:scale-110 ${
        item.isActive ? "text-blue-600 dark:text-blue-400" : "group-hover:text-blue-600 dark:group-hover:text-blue-400"
      }`}>
        {item.icon}
      </span>
      {!isCollapsed && (
        <span className={`whitespace-nowrap transition-transform duration-200 ${
          !item.isActive ? "group-hover:translate-x-1 font-medium" : ""
        }`}>
          {item.name}
        </span>
      )}
    </Link>
  );
}

export function AppSidebar({ 
  isCollapsed = false,
  onToggleCollapse,
  className = "",
}: { 
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}) {
  return (
    <div 
      className={`h-full bg-white dark:bg-[#09090b] border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out flex flex-col ${
        isCollapsed ? 'w-20' : 'w-64'
      } ${className}`}
    >
      <div className="h-16 shrink-0 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
        {!isCollapsed ? (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
              <LayoutDashboard className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              DashKit<span className="text-blue-600">.</span>
            </span>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-sm font-bold text-white">D</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Toggle Button for Desktop */}
      {onToggleCollapse && (
        <div className="hidden lg:flex items-center justify-center p-2 border-b border-slate-200 dark:border-slate-800">
          <button 
            onClick={onToggleCollapse}
            className={`flex items-center p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 w-full ${
              !isCollapsed ? 'justify-between px-3' : 'justify-center'
            }`}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {!isCollapsed && <span className="text-[10px] font-semibold uppercase tracking-widest">Collapse</span>}
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>
        </div>
      )}
      
      <div className={`flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-6 ${isCollapsed ? 'px-2' : ''}`}>
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="space-y-1">
            {!isCollapsed ? (
              <h3 className="px-3 text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 whitespace-nowrap">
                {group.label}
              </h3>
            ) : (
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-4 w-6 mx-auto" />
            )}
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavItemComponent key={item.name} item={item} isCollapsed={isCollapsed} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
