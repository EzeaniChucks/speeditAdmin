"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Placeholder data
const orders = [
  { id: "ORD001", customer: "John Doe", restaurant: "Burger King", total: 25.99, status: "Delivered" },
  { id: "ORD002", customer: "Jane Smith", restaurant: "Pizza Hut", total: 35.5, status: "In Progress" },
  { id: "ORD003", customer: "Bob Johnson", restaurant: "Subway", total: 15.75, status: "Pending" },
]

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Restaurant</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.restaurant}</TableCell>
            <TableCell>${order.total.toFixed(2)}</TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

