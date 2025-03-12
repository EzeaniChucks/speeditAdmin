"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Placeholder data
const deliveries = [
  { id: "DEL001", order: "ORD001", driver: "Mike Smith", restaurant: "Burger King", status: "In Transit" },
  { id: "DEL002", order: "ORD002", driver: "Sarah Lee", restaurant: "Pizza Hut", status: "Delivered" },
  { id: "DEL003", order: "ORD003", driver: "Tom Brown", restaurant: "Subway", status: "Assigned" },
]

export function DeliveriesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Delivery ID</TableHead>
          <TableHead>Order ID</TableHead>
          <TableHead>Driver</TableHead>
          <TableHead>Restaurant</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deliveries.map((delivery) => (
          <TableRow key={delivery.id}>
            <TableCell>{delivery.id}</TableCell>
            <TableCell>{delivery.order}</TableCell>
            <TableCell>{delivery.driver}</TableCell>
            <TableCell>{delivery.restaurant}</TableCell>
            <TableCell>{delivery.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

