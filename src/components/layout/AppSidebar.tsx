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
import { cn } from "@/lib/utils";

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
      { name: "Dashboard", href: "#", icon: <LayoutDashboard className="w-5 h-5" />, isActive: true },
      { name: "Analytics", href: "#", icon: <LineChart className="w-5 h-5" /> },
    ]
  },
  {
    label: "Management",
    items: [
      { name: "All Users", href: "#", icon: <Users className="w-5 h-5" /> },
      { name: "Roles & Permissions", href: "#", icon: <Shield className="w-5 h-5" /> },
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
  return (
    <a
      href={item.href}
      className={cn(
        "group flex items-center py-2.5 rounded-lg transition-all duration-200",
        isCollapsed ? 'px-0 justify-center' : 'px-3 gap-3',
        item.isActive 
          ? "bg-primary/10 text-primary font-semibold" 
          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
      )}
      title={isCollapsed ? item.name : undefined}
    >
      <span className={cn(
        "flex-shrink-0 transition-transform duration-200 group-hover:scale-110",
        item.isActive ? "text-primary" : "group-hover:text-primary"
      )}>
        {item.icon}
      </span>
      {!isCollapsed && (
        <span className={cn(
          "whitespace-nowrap transition-transform duration-200",
          !item.isActive && "group-hover:translate-x-1 font-medium"
        )}>
          {item.name}
        </span>
      )}
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
        "h-full bg-background border-r border-border transition-all duration-300 ease-in-out flex flex-col",
        isCollapsed ? 'w-20' : 'w-64',
        className
      )}
    >
      <div className="h-16 shrink-0 flex items-center px-6 border-b border-border/50">
        {!isCollapsed ? (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <LayoutDashboard className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              DashKit<span className="text-primary">.</span>
            </span>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">D</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Toggle Button for Desktop */}
      {onToggleCollapse && (
        <div className="hidden lg:flex items-center justify-center p-2 border-b border-border/50">
          <button 
            onClick={onToggleCollapse}
            className={cn(
              "flex items-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 w-full",
              !isCollapsed ? 'justify-between px-3' : 'justify-center'
            )}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {!isCollapsed && <span className="text-[10px] font-semibold uppercase tracking-widest">Collapse</span>}
            {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
          </button>
        </div>
      )}
      
      <div className={cn("flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-6 custom-scrollbar", isCollapsed && 'px-2')}>
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="space-y-1">
            {!isCollapsed ? (
              <h3 className="px-3 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-2 whitespace-nowrap">
                {group.label}
              </h3>
            ) : (
              <div className="h-px bg-border my-4 w-6 mx-auto" />
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
