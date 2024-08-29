"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import {
  ArrowLeftRight,
  Bomb,
  ChartBarIncreasing,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coins,
  Dices,
  FerrisWheel,
  Handshake,
  House,
  MessagesSquare,
  PlaneTakeoff,
  Star,
  Trophy,
  User,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useSidebar } from "./sidebar.context"
import Image from "next/image"

const navItems = [
  { name: "Home", icon: House, href: "/home" },
  { name: "Favourites", icon: Star, href: "/orders" },
  { name: "Leaderboard", icon: Trophy, href: "/customers" },
]

const nav2Items = [
  { name: "Profile", icon: User, href: "/home" },
  { name: "Transactions", icon: ArrowLeftRight, href: "/orders" },
  { name: "Affiliate", icon: Handshake, href: "/customers" },
  { name: "Live Support", icon: MessagesSquare, href: "/customers" },
]

const gameItems = [
  { name: "Wheel", icon: FerrisWheel, href: "/casino/wheel" },
  { name: "Dice", icon: Dices, href: "/casino/dice" },
  { name: "Mines", icon: Bomb, href: "/casino/mines" },
  { name: "Aviator", icon: PlaneTakeoff, href: "/casino/aviator" },
  { name: "Limbo", icon: Coins, href: "/casino/aviator" },
  { name: "Pinko", icon: ChartBarIncreasing, href: "/casino/aviator" },
]

interface SidebarProps {
  onCollapseChange?: (collapsed: boolean) => void; // Optional callback to notify about collapse state
}

export default function Sidebar({ onCollapseChange }: SidebarProps) {
  const { isCollapsed, toggleSidebar } = useSidebar()
  const pathname = usePathname()

  const handleToggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    toggleSidebar(); // Toggle the sidebar state
    if (onCollapseChange) {
      onCollapseChange(newCollapsedState); // Notify the parent component
    }
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-secondary transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex flex-row min-h-[60px] md:min-h-[70px] items-center border-b px-3">
          <Button
            size="icon"
            variant={"outline"}
            className="mr-auto"
            onClick={handleToggleSidebar}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
          {/* <span className={`text-4xl font-bold ${isCollapsed ? "hidden": "flex"}`}>Dash</span> */}
          <Button size={"sm"} variant={"outline"} className={`${isCollapsed ? "hidden": "flex"} relative flex-row max-w-full px-5 overflow-hidden`}>
          <Image
                src="/assets/img/coins.png"
                alt="Casino background"
                layout="fill"
                objectFit="cover"
              />
            <div className="flex flex-row items-center justify-between gap-5">
            <span className="relative z-10 text-2xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] [text-shadow:_3px_3px_0_rgb(0_0_0_/_30%)]">Casino</span>
            <ChevronDown className="relative z-10 text-2xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] [text-shadow:_3px_3px_0_rgb(0_0_0_/_30%)]" />
            </div>
          </Button>
        </div>
        <div className="flex items-center justify-center border-background/80 border-b"/>
        <ScrollArea className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              isCollapsed ? (
                <TooltipProvider key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-md px-4 mt-2 py-2 hover:bg-muted text-[16px] font-medium transition-colors",
                          pathname === item.href
                            ? "bg-background text-primary"
                            : "text-white",
                          "justify-center"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>{item.name}</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-4 mt-2 py-2 hover:bg-muted text-[16px] font-medium transition-colors",
                    pathname === item.href
                      ? "bg-background text-primary"
                      : "text-white",
                    "justify-start"
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              )
            ))}
          </nav>
          <div className="flex w-full border-b my-5"/>
          <nav className="space-y-1 px-2">
            {gameItems.map((item) => (
              isCollapsed ? (
                <TooltipProvider key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-md px-4 mt-2 py-2 hover:bg-muted text-[16px] font-medium transition-colors",
                          pathname === item.href
                            ? "bg-background text-primary"
                            : "text-white",
                          "justify-center"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>{item.name}</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-4 mt-2 py-2 hover:bg-muted text-[16px] font-medium transition-colors",
                    pathname === item.href
                      ? "bg-background text-primary"
                      : "text-white",
                    "justify-start"
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              )
            ))}
          </nav>
          <div className="flex w-full border-b my-5"/>
          <nav className="space-y-1 px-2">
            {nav2Items.map((item) => (
              isCollapsed ? (
                <TooltipProvider key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center rounded-md px-4 mt-2 py-2 hover:bg-muted text-[16px] font-medium transition-colors",
                          pathname === item.href
                            ? "bg-background text-primary"
                            : "text-white",
                          "justify-center"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>{item.name}</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-4 mt-2 py-2 hover:bg-muted text-[16px] font-medium transition-colors",
                    pathname === item.href
                      ? "bg-background text-primary"
                      : "text-white",
                    "justify-start"
                  )}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              )
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}