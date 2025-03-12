"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const notifications = [
  { id: 1, title: "New Order", message: "You have received a new order #12345", date: "2023-05-18 10:30 AM" },
  {
    id: 2,
    title: "Payment Received",
    message: "Payment for order #12344 has been received",
    date: "2023-05-18 09:45 AM",
  },
  {
    id: 3,
    title: "New Restaurant Application",
    message: "A new restaurant has applied to join the platform",
    date: "2023-05-17 03:20 PM",
  },
]

export function NotificationsList() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Card key={notification.id}>
          <CardHeader>
            <CardTitle>{notification.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{notification.message}</p>
            <p className="text-sm text-muted-foreground mt-2">{notification.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

