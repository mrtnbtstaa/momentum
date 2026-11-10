"use client";

import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  ListTodo,
  Sparkles,
  Users,
  BarChart3,
  Bell,
  Settings,
  LucideIcon
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useViewModeStore } from "@/store/useViewModeStore";

interface NavProps {
  icon: LucideIcon,
  label: string;
  href: string
}

// Define nav items with their routes
const navItems: NavProps[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: CheckSquare, label: "My Tasks", href: "/tasks" },
  // { icon: ListTodo, label: "All Tasks", href: "/tasks/all" },
  { icon: Sparkles, label: "AI Assistant", href: "/ai-assistant" },
  { icon: Users, label: "Team Members", href: "/members" },
  // { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  // The actual sidebar content, reused for both mobile and desktop
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0A0A0A]">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <Link href="/" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-sm" /> Momentum
        </Link>
      </div>

      {/* Nav */}
      <ScrollArea className="flex-1 py-6 px-3">
        <nav className="space-y-1">
          {navItems.map((item) => {
            // Check if the current route matches the item's href
            const isActive = pathname === item.href;

            return (
              <Button
                nativeButton={false}
                key={item.label}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 px-3 h-10 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-white/10 text-white hover:bg-white/15"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
                render={
                  <Link href={item.href} onClick={onClose}>
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                }
              />
            );
          })}
        </nav>
      </ScrollArea>

      {/* User Footer */}
      <div className="p-4 border-t border-white/10 mt-auto">
        <Button
          variant="ghost"
          className="w-full h-auto p-2 justify-start bg-white/5 hover:bg-white/10 transition-colors"
        >
          <Avatar className="h-9 w-9 border border-white/20 mr-3">
            <AvatarImage src="/avatar.png" alt="Acme Product Corp" />
            <AvatarFallback className="bg-purple-900 text-xs text-white">AC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start overflow-hidden text-left">
            <span className="text-sm font-medium text-white truncate w-full">Acme Product Corp</span>
            <span className="text-xs text-gray-400 truncate w-full">Product Lead</span>
          </div>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Hidden on mobile) */}
      <aside className="fixed top-0 left-0 z-40 h-screen w-64 border-r border-white/10 hidden lg:flex flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar (Uses shadcn Sheet) */}
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent
          side="left"
          className="w-64 p-0 bg-[#0A0A0A] border-r-white/10 text-white sm:max-w-xs"
        >
          {/* SheetTitle is required for accessibility, but we hide it visually */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
}