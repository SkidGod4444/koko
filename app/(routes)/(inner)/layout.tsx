"use client";
import Sidebar from "@/components/custom/layouts/inner/sidebar";
import { SidebarProvider } from "@/components/custom/layouts/inner/sidebar.context";
import { Toaster } from "@/components/ui/sonner";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
      <Toaster />
    </SidebarProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { useSidebar } = require("@/components/custom/layouts/inner/sidebar.context");
  const { isCollapsed } = useSidebar();
  const marginLeft = isCollapsed ? "ml-16" : "ml-60";

  return (
    <div className="flex">
      <Sidebar />
      <div className={`flex-1 transition-[margin-left] duration-300 ${marginLeft}`}>
        {children}
      </div>
    </div>
  );
}