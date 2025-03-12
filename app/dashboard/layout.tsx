"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { UserNav } from "@/components/dashboard/user-nav"
import {
  BarChart3,
  Users,
  Store,
  Menu,
  ShoppingBag,
  Truck,
  Tag,
  CreditCard,
  MessageSquare,
  LineChart,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Prevent hydration errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const menuItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: BarChart3,
    },
    {
      title: "User Management",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Restaurant Management",
      href: "/dashboard/restaurants",
      icon: Store,
    },
    {
      title: "Menu Management",
      href: "/dashboard/menus",
      icon: Menu,
    },
    {
      title: "Order Management",
      href: "/dashboard/orders",
      icon: ShoppingBag,
    },
    {
      title: "Delivery Management",
      href: "/dashboard/deliveries",
      icon: Truck,
    },
    {
      title: "Promotions & Discounts",
      href: "/dashboard/promotions",
      icon: Tag,
    },
    {
      title: "Payment Management",
      href: "/dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "Feedback & Reviews",
      href: "/dashboard/feedback",
      icon: MessageSquare,
    },
    {
      title: "Analytics & Reports",
      href: "/dashboard/analytics",
      icon: LineChart,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
    {
      title: "Help & Support",
      href: "/dashboard/help",
      icon: HelpCircle,
    },
  ]

  return (
    <SidebarProvider className="">
      <div className="flex min-h-screen w-screen">
        {/* side bar */}
        <Sidebar className="border border-appDarkBlue">
          <SidebarHeader className="flex h-14 items-center px-6 bg-appDarkBlue text-white">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-lg">Speedit Admin</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-appDarkBlue text-white p-5">
            <SidebarMenu className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <a href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarSeparator />
          <SidebarFooter className="bg-appDarkBlue text-white p-5">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Logout">
                  <a href="/login">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        {/* Main Content */}
        <div className="flex flex-1 flex-col ">
          <header className="sticky top-0 flex h-14 items-center gap-4 border bg-background px-4 sm:px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <ModeToggle />
              <UserNav />
            </div>
          </header>
          <main className="flex-1 items-center justify-center p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

