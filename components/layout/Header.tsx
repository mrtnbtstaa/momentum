import { Search, Bell, HelpCircle, Menu, User, Settings, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 border-b border-white/10 bg-[#0A0A0A] flex items-center justify-between px-4 md:px-8 sticky top-0 z-20">

      {/* Left: Menu Button (Mobile) & Search */}
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="lg:hidden text-gray-400 hover:text-white hover:bg-white/5 shrink-0"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search tasks, projects, people..."
            className="pl-9 bg-white/5 border-white/10 text-gray-200 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-white/20 h-9"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1 md:gap-2 ml-4">

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-white/5 rounded-full"
        >
          <Bell className="w-5 h-5" />
        </Button>

        {/* Help */}
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-white/5 rounded-full hidden sm:flex"
        >
          <HelpCircle className="w-5 h-5" />
        </Button>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="ghost" className="relative h-8 w-8 rounded-full ml-1 md:ml-2 focus-visible:ring-0 focus-visible:ring-offset-0">
            <Avatar className="h-8 w-8 border border-white/20">
              <AvatarImage src="/avatar.png" alt="Sarah Chen" />
              <AvatarFallback className="bg-purple-900 text-xs text-white">SC</AvatarFallback>
            </Avatar>
          </Button>}>

          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#141414] border-white/10 text-gray-300" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-white">Sarah Chen</p>
                <p className="text-xs leading-none text-gray-400">sarah@acmecorp.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuGroup>
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="focus:bg-red-500/10 focus:text-red-400 text-red-400 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}