import type { Metadata } from "next"
import { RestaurantsTable } from "@/components/restaurants/restaurants-table"
import { RestaurantFilters } from "@/components/restaurants/restaurant-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Restaurant Management | Food Delivery Admin",
  description: "Manage restaurant profiles and approvals",
}

export default function RestaurantsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Restaurant Management</h2>
          <p className="text-muted-foreground">Manage restaurant profiles, menus, and approval requests</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Restaurant
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all">All Restaurants</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending Approval</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          <RestaurantFilters />
        </div>

        <TabsContent value="all" className="mt-4">
          <RestaurantsTable status="all" />
        </TabsContent>

        <TabsContent value="active" className="mt-4">
          <RestaurantsTable status="active" />
        </TabsContent>

        <TabsContent value="pending" className="mt-4">
          <RestaurantsTable status="pending" />
        </TabsContent>

        <TabsContent value="inactive" className="mt-4">
          <RestaurantsTable status="inactive" />
        </TabsContent>
      </Tabs>
    </div>
  )
}