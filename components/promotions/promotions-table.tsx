"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const promotions = [
  {
    id: "PROMO1",
    name: "Summer Sale",
    discount: "20%",
    startDate: "2023-06-01",
    endDate: "2023-08-31",
    status: "Active",
  },
  { id: "PROMO2", name: "New User", discount: "15%", startDate: "2023-05-01", endDate: "2023-12-31", status: "Active" },
  {
    id: "PROMO3",
    name: "Holiday Special",
    discount: "25%",
    startDate: "2023-12-15",
    endDate: "2024-01-05",
    status: "Scheduled",
  },
]

export function PromotionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Discount</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {promotions.map((promo) => (
          <TableRow key={promo.id}>
            <TableCell>{promo.id}</TableCell>
            <TableCell>{promo.name}</TableCell>
            <TableCell>{promo.discount}</TableCell>
            <TableCell>{promo.startDate}</TableCell>
            <TableCell>{promo.endDate}</TableCell>
            <TableCell>{promo.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

