"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const payments = [
  { id: "PAY001", orderId: "ORD123", amount: 25.99, method: "Credit Card", status: "Completed", date: "2023-05-15" },
  { id: "PAY002", orderId: "ORD124", amount: 34.5, method: "PayPal", status: "Pending", date: "2023-05-16" },
  { id: "PAY003", orderId: "ORD125", amount: 18.75, method: "Debit Card", status: "Completed", date: "2023-05-17" },
]

export function PaymentsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Payment ID</TableHead>
          <TableHead>Order ID</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id}>
            <TableCell>{payment.id}</TableCell>
            <TableCell>{payment.orderId}</TableCell>
            <TableCell>${payment.amount.toFixed(2)}</TableCell>
            <TableCell>{payment.method}</TableCell>
            <TableCell>{payment.status}</TableCell>
            <TableCell>{payment.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

