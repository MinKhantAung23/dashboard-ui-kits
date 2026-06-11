"use client";

import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#09090b]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 z-40">
        <AppSidebar 
          isCollapsed={isDesktopCollapsed} 
          onToggleCollapse={() => setIsDesktopCollapsed(!isDesktopCollapsed)} 
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMobileOpen(false)}
          />
          
          {/* Sidebar Drawer */}
          <div className="relative w-64 max-w-[80%] h-full flex flex-col bg-white dark:bg-[#09090b] shadow-xl animate-in slide-in-from-left duration-300">
            <AppSidebar />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div 
        className={`flex flex-col min-h-screen transition-all duration-300 ease-in-out ${
          isDesktopCollapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        <Header onMenuClick={() => setIsMobileOpen(true)} />
        <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
