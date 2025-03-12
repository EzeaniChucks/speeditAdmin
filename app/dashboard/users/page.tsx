import type { Metadata } from "next"
import { UsersTable } from "@/components/users/users-table"
import { UserFilters } from "@/components/users/user-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "User Management | Food Delivery Admin",
  description: "Manage users, customers and delivery personnel",
}

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
          <p className="text-muted-foreground">Manage customers and delivery personnel accounts</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="delivery">Delivery Personnel</TabsTrigger>
            <TabsTrigger value="admins">Administrators</TabsTrigger>
          </TabsList>
          <UserFilters />
        </div>

        <TabsContent value="all" className="mt-4">
          <UsersTable userType="all" />
        </TabsContent>

        <TabsContent value="customers" className="mt-4">
          <UsersTable userType="customer" />
        </TabsContent>

        <TabsContent value="delivery" className="mt-4">
          <UsersTable userType="delivery" />
        </TabsContent>

        <TabsContent value="admins" className="mt-4">
          <UsersTable userType="admin" />
        </TabsContent>
      </Tabs>
    </div>
  )
}