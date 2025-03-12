import type { Metadata } from "next"
import { NotificationsList } from "@/components/notifications/notifications-list"

export const metadata: Metadata = {
  title: "Notifications | Food Delivery Admin",
  description: "Manage and view system notifications",
}

export default function NotificationsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
        <p className="text-muted-foreground">View and manage system notifications</p>
      </div>

      <NotificationsList />
    </div>
  )
}

