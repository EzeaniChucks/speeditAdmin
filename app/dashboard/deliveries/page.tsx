import type { Metadata } from "next"
import { DeliveriesTable } from "@/components/deliveries/deliveries-table"
import { DeliveryFilters } from "@/components/deliveries/delivery-filters"

export const metadata: Metadata = {
  title: "Delivery Management | Food Delivery Admin",
  description: "Manage and track food deliveries",
}

export default function DeliveriesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Delivery Management</h2>
        <p className="text-muted-foreground">Track and manage food deliveries</p>
      </div>

      <DeliveryFilters />
      <DeliveriesTable />
    </div>
  )
}

