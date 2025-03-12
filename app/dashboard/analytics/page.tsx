import type { Metadata } from "next"
import { AnalyticsDashboard } from "@/components/analytics/analytics-dashboard"

export const metadata: Metadata = {
  title: "Analytics & Reports | Food Delivery Admin",
  description: "View analytics and generate reports for the food delivery platform",
}

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Analytics & Reports</h2>
        <p className="text-muted-foreground">View platform analytics and generate custom reports</p>
      </div>

      <AnalyticsDashboard />
    </div>
  )
}

