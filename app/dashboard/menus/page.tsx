import type { Metadata } from "next"
import { MenusTable } from "@/components/menus/menus-table"
import { MenuFilters } from "@/components/menus/menu-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Menu Management | Food Delivery Admin",
  description: "Manage restaurant menus and items",
}

export default function MenusPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Menu Management</h2>
          <p className="text-muted-foreground">Manage restaurant menus, categories, and items</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Menu Item
        </Button>
      </div>

      <MenuFilters />
      <MenusTable />
    </div>
  )
}

