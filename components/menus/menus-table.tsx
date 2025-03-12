"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Placeholder data
const menuItems = [
  { id: 1, name: "Burger", restaurant: "Burger King", category: "Main Course", price: 9.99, status: "Active" },
  { id: 2, name: "Pizza", restaurant: "Pizza Hut", category: "Main Course", price: 12.99, status: "Active" },
  { id: 3, name: "Salad", restaurant: "Subway", category: "Appetizer", price: 5.99, status: "Inactive" },
]

export function MenusTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Restaurant</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menuItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.restaurant}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>${item.price.toFixed(2)}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

