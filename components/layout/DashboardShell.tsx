"use client";

import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 left-0 z-40">
        <AppSidebar 
          isCollapsed={isSidebarCollapsed} 
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
        />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="p-0 w-72 bg-transparent border-none [&>button]:hidden">
          <VisuallyHidden.Root>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Access dashboard sections</SheetDescription>
          </VisuallyHidden.Root>
          <AppSidebar className="w-full rounded-r-2xl overflow-hidden border-r-0 shadow-2xl" />
        </SheetContent>
      </Sheet>
      
      {/* Main Content Area */}
      <div className={cn("flex flex-col min-h-screen transition-[padding] duration-300 ease-in-out", isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64')}>
        <Header onMenuClick={() => setIsMobileOpen(true)} />
        
        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
