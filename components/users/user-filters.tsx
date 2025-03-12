"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserFilters() {
  const [statusFilter, setStatusFilter] = useState<string[]>([])

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative w-full sm:w-64">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search users..." className="pl-8" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Status Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={statusFilter.includes("active")}
            onCheckedChange={(checked) => {
              if (checked) {
                setStatusFilter([...statusFilter, "active"])
              } else {
                setStatusFilter(statusFilter.filter((s) => s !== "active"))
              }
            }}
          >
            Active
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={statusFilter.includes("inactive")}
            onCheckedChange={(checked) => {
              if (checked) {
                setStatusFilter([...statusFilter, "inactive"])
              } else {
                setStatusFilter(statusFilter.filter((s) => s !== "inactive"))
              }
            }}
          >
            Inactive
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={statusFilter.includes("suspended")}
            onCheckedChange={(checked) => {
              if (checked) {
                setStatusFilter([...statusFilter, "suspended"])
              } else {
                setStatusFilter(statusFilter.filter((s) => s !== "suspended"))
              }
            }}
          >
            Suspended
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="outline">More Filters</Button>
    </div>
  )
}