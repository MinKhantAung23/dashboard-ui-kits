import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary transition-colors duration-300">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed top-0 left-0 h-screen z-40">
        <AppSidebar 
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      </div>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="p-0 w-72 border-r-0">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <AppSidebar />
        </SheetContent>
      </Sheet>
      
      <div className={cn("flex flex-col min-h-screen transition-[padding] duration-300 ease-in-out", isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72')}>
        <Header onMenuClick={() => setIsMobileOpen(true)} />
        
        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
