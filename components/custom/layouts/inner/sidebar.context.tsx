"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'

type SidebarContextType = {
  isCollapsed: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  useEffect(() => {
    const collapsed = localStorage.getItem("sidebarCollapsed")
    setIsCollapsed(collapsed === "true")
  }, [isCollapsed])

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
    localStorage.setItem("sidebarCollapsed", (!isCollapsed).toString())
  }

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}