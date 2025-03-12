import type { Metadata } from "next"
import { PaymentsTable } from "@/components/payments/payments-table"
import { PaymentFilters } from "@/components/payments/payment-filters"

export const metadata: Metadata = {
  title: "Payment Management | Food Delivery Admin",
  description: "Manage payments and transactions for the food delivery platform",
}

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Payment Management</h2>
        <p className="text-muted-foreground">Track and manage payments and transactions</p>
      </div>

      <PaymentFilters />
      <PaymentsTable />
    </div>
  )
}

