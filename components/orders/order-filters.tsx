"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function OrderFilters() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-64">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search orders..." className="pl-8" />
      </div>
      <Button variant="outline">Status Filter</Button>
      <Button variant="outline">Date Range</Button>
    </div>
  )
}

