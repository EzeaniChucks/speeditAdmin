import type { Metadata } from "next"
import { OrdersTable } from "@/components/orders/orders-table"
import { OrderFilters } from "@/components/orders/order-filters"

export const metadata: Metadata = {
  title: "Order Management | Food Delivery Admin",
  description: "Manage and track customer orders",
}

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Order Management</h2>
        <p className="text-muted-foreground">View, manage, and track customer orders</p>
      </div>

      <OrderFilters />
      <OrdersTable />
    </div>
  )
}

