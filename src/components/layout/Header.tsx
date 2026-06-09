import { useState } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Menu, Sun, Moon, Globe, Bell, Search } from "lucide-react";
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
    <header className="sticky top-0 z-30 h-20 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-4 lg:px-8 transition-colors duration-300">
      <div className="flex items-center gap-4 flex-1">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="lg:hidden text-muted-foreground"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-muted rounded-full border border-transparent focus-within:border-primary/50 focus-within:bg-background transition-all w-96 max-w-md shadow-inner dark:shadow-none">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none focus:outline-none text-sm w-full text-foreground placeholder:text-muted-foreground"
          />
          <div className="flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-background border border-border text-muted-foreground">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-3">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative text-muted-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-background"></span>
        </Button>

        <div className="h-6 w-px bg-border mx-1"></div>

        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 px-3 text-muted-foreground font-medium">
              <Globe className="w-4 h-4" />
              <span>{lang}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLang('EN')}>English (EN)</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('MM')}>Myanmar (MM)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-rose-500 focus:text-rose-500 focus:bg-rose-500/10">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
