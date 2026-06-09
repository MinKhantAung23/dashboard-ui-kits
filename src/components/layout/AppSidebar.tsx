import { 
  LayoutDashboard, 
  LineChart, 
  Users, 
  Shield, 
  FolderGit2, 
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

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
      { name: "Dashboard", href: "#", icon: <LayoutDashboard className="w-4 h-4" /> },
      { name: "Analytics", href: "#", icon: <LineChart className="w-4 h-4" /> },
    ]
  },
  {
    label: "Management",
    items: [
      { 
        name: "Users", 
        icon: <Users className="w-4 h-4" />,
        children: [
          { name: "All Users", href: "#" },
          { name: "Roles & Permissions", href: "#", icon: <Shield className="w-3 h-3" /> }
        ]
      },
      { name: "Projects", href: "#", icon: <FolderGit2 className="w-4 h-4" /> },
    ]
  },
  {
    label: "Preferences",
    items: [
      { name: "Settings", href: "#", icon: <Settings className="w-4 h-4" /> },
    ]
  }
];

export function AppSidebar() {
  return (
    <Sidebar variant="inset" className="border-r border-border">
      <SidebarHeader className="h-14 flex items-center justify-center px-4 border-b border-border/50">
        <div className="flex items-center gap-2 w-full">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
            <LayoutDashboard className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground whitespace-nowrap overflow-hidden">
            DashKit<span className="text-primary">.</span>
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-4 gap-4 custom-scrollbar">
        {NAV_GROUPS.map((group) => (
          <SidebarGroup key={group.label} className="px-0">
            <SidebarGroupLabel className="px-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    {item.children ? (
                      <>
                        <SidebarMenuButton tooltip={item.name} className="text-muted-foreground hover:text-foreground">
                          {item.icon}
                          <span className="text-sm font-medium">{item.name}</span>
                        </SidebarMenuButton>
                        <SidebarMenuSub>
                          {item.children.map(child => (
                            <SidebarMenuSubItem key={child.name}>
                              <SidebarMenuSubButton asChild>
                                <a href={child.href} className="text-muted-foreground hover:text-foreground">
                                  {child.icon}
                                  <span className="text-xs">{child.name}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </>
                    ) : (
                      <SidebarMenuButton asChild tooltip={item.name} className="text-muted-foreground hover:text-foreground">
                        <a href={item.href}>
                          {item.icon}
                          <span className="text-sm font-medium">{item.name}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
