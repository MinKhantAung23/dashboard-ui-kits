import { useState } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Menu, Sun, Moon, Globe, Bell, Search, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { setTheme } = useTheme();
  const [lang, setLang] = useState('EN');

  return (
    <header className="sticky top-0 z-30 h-14 bg-background border-b border-border flex items-center justify-between px-4 lg:px-6 transition-colors duration-300">
      <div className="flex items-center gap-4 flex-1">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="lg:hidden text-muted-foreground h-8 w-8"
        >
          <Menu className="w-4 h-4" />
        </Button>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md border border-transparent focus-within:border-primary/50 focus-within:bg-background transition-all w-64">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none focus:outline-none text-xs w-full text-foreground placeholder:text-muted-foreground"
          />
          <div className="flex items-center justify-center px-1 py-0.5 rounded text-[9px] font-medium bg-background border border-border text-muted-foreground">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 lg:gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-muted-foreground h-8 w-8">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full border border-background"></span>
        </Button>

        <div className="h-4 w-px bg-border mx-0.5"></div>

        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-1.5 px-2 h-8 text-muted-foreground font-medium text-xs">
              <Globe className="w-3.5 h-3.5" />
              <span>{lang}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="text-xs">
            <DropdownMenuItem onClick={() => setLang('EN')}>English (EN)</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('MM')}>Myanmar (MM)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="text-xs">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 lg:w-auto lg:px-2 gap-2 rounded-full lg:rounded-md ml-1">
              <Avatar className="h-6 w-6 border border-border">
                <AvatarImage src="" alt="@shadcn" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-[10px]">JD</AvatarFallback>
              </Avatar>
              <div className="hidden lg:flex flex-col items-start text-left">
                <span className="text-xs font-medium leading-none">John Doe</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john.doe@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs">
              <User className="mr-2 h-3.5 w-3.5" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-xs">
              <Settings className="mr-2 h-3.5 w-3.5" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-500 focus:text-rose-500 focus:bg-rose-500/10 text-xs">
              <LogOut className="mr-2 h-3.5 w-3.5" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
