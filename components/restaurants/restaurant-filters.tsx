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

export function RestaurantFilters() {
  const [cuisineFilter, setCuisineFilter] = useState<string[]>([])

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-64">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search restaurants..." className="pl-8" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Cuisine Filter</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Filter by Cuisine</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={cuisineFilter.includes("Fast Food")}
            onCheckedChange={(checked) => {
              if (checked) {
                setCuisineFilter([...cuisineFilter, "Fast Food"])
              } else {
                setCuisineFilter(cuisineFilter.filter((c) => c !== "Fast Food"))
              }
            }}
          >
            Fast Food
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={cuisineFilter.includes("Pizza")}
            onCheckedChange={(checked) => {
              if (checked) {
                setCuisineFilter([...cuisineFilter, "Pizza"])
              } else {
                setCuisineFilter(cuisineFilter.filter((c) => c !== "Pizza"))
              }
            }}
          >
            Pizza
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={cuisineFilter.includes("Mexican")}
            onCheckedChange={(checked) => {
              if (checked) {
                setCuisineFilter([...cuisineFilter, "Mexican"])
              } else {
                setCuisineFilter(cuisineFilter.filter((c) => c !== "Mexican"))
              }
            }}
          >
            Mexican
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={cuisineFilter.includes("Italian")}
            onCheckedChange={(checked) => {
              if (checked) {
                setCuisineFilter([...cuisineFilter, "Italian"])
              } else {
                setCuisineFilter(cuisineFilter.filter((c) => c !== "Italian"))
              }
            }}
          >
            Italian
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="outline">More Filters</Button>
    </div>
  )
}

