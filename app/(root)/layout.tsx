"use client";

import React, { Suspense, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayoutContent = ({ children }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Automatically close sidebar when navigating between routes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex min-h-screen flex-col transition-all duration-300 lg:pl-64">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="mx-auto w-full max-w-[1600px] flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-[#0A0A0A]" />}
    >
      <MainLayoutContent>{children}</MainLayoutContent>
    </Suspense>
  );
};

export default MainLayout;