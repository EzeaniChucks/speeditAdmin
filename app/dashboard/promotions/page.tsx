import type { Metadata } from "next"
import { PromotionsTable } from "@/components/promotions/promotions-table"
import { PromotionFilters } from "@/components/promotions/promotion-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Promotions & Discounts | Food Delivery Admin",
  description: "Manage promotions and discounts for the food delivery platform",
}

export default function PromotionsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Promotions & Discounts</h2>
          <p className="text-muted-foreground">Manage promotional offers and discounts</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Promotion
        </Button>
      </div>

      <PromotionFilters />
      <PromotionsTable />
    </div>
  )
}

