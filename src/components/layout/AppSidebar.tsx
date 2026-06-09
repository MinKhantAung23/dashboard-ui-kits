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
import { cn } from "@/lib/utils";

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
          className={cn(
            "group flex items-center justify-between w-full py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200",
            isCollapsed ? 'px-0 justify-center' : 'px-3'
          )}
          title={isCollapsed ? item.name : undefined}
        >
          <div className={cn("flex items-center", isCollapsed ? 'justify-center' : 'gap-3')}>
            <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200 group-hover:text-primary">
              {item.icon}
            </span>
            {!isCollapsed && <span className="font-medium whitespace-nowrap">{item.name}</span>}
          </div>
          {!isCollapsed && (
            <ChevronDown className={cn("w-4 h-4 flex-shrink-0 transition-transform duration-300", isOpen ? "rotate-180 text-primary" : "")} />
          )}
        </button>
        {isOpen && !isCollapsed && (
          <div className="flex flex-col mt-1.5 ml-5 pl-4 border-l border-border space-y-1">
            {item.children.map(child => (
              <a key={child.name} href={child.href} className="group flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 whitespace-nowrap">
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
      className={cn(
        "group flex items-center py-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200",
        isCollapsed ? 'px-0 justify-center' : 'px-3 gap-3'
      )}
      title={isCollapsed ? item.name : undefined}
    >
      <span className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200 group-hover:text-primary">
        {item.icon}
      </span>
      {!isCollapsed && <span className="font-medium whitespace-nowrap group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>}
    </a>
  );
}

export function AppSidebar({ 
  isCollapsed = false,
  onToggleCollapse,
  className,
}: { 
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "h-full bg-background/95 backdrop-blur-xl border-r border-border transition-all duration-300 ease-in-out flex flex-col",
        isCollapsed ? 'w-20' : 'w-72',
        className
      )}
    >
      <div className="h-20 shrink-0 flex items-center justify-center border-b border-border/50">
        {!isCollapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <LayoutDashboard className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground whitespace-nowrap overflow-hidden">
              DashKit<span className="text-primary">.</span>
            </span>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-xl font-bold text-primary-foreground">D</span>
          </div>
        )}
      </div>
      
      {/* Toggle Button for Desktop */}
      {onToggleCollapse && (
        <div className="hidden lg:flex items-center justify-center p-3 border-b border-border/50">
          <button 
            onClick={onToggleCollapse}
            className={cn(
              "flex items-center p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 w-full",
              !isCollapsed ? 'justify-between px-4' : 'justify-center'
            )}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {!isCollapsed && <span className="text-[11px] font-semibold uppercase tracking-widest">Collapse View</span>}
            {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
          </button>
        </div>
      )}
      
      <div className={cn("flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-8 custom-scrollbar", isCollapsed && 'px-2')}>
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="space-y-2">
            {!isCollapsed ? (
              <h3 className="px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3 whitespace-nowrap">
                {group.label}
              </h3>
            ) : (
              <div className="h-px bg-border my-6 w-8 mx-auto" />
            )}
            {group.items.map((item) => (
              <NavItemComponent key={item.name} item={item} isCollapsed={isCollapsed} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
