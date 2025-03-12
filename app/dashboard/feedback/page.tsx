import type { Metadata } from "next"
import { FeedbackTable } from "@/components/feedback/feedback-table"
import { FeedbackFilters } from "@/components/feedback/feedback-filters"

export const metadata: Metadata = {
  title: "Feedback & Reviews | Food Delivery Admin",
  description: "Manage customer feedback and reviews for restaurants",
}

export default function FeedbackPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Feedback & Reviews</h2>
        <p className="text-muted-foreground">Manage and respond to customer feedback and reviews</p>
      </div>

      <FeedbackFilters />
      <FeedbackTable />
    </div>
  )
}

