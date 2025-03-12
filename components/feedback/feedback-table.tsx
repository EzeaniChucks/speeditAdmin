"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const feedback = [
  { id: "FB001", restaurant: "Burger King", rating: 4, comment: "Great food and service!", date: "2023-05-15" },
  {
    id: "FB002",
    restaurant: "Pizza Hut",
    rating: 3,
    comment: "Delivery was a bit late, but food was good.",
    date: "2023-05-16",
  },
  {
    id: "FB003",
    restaurant: "Subway",
    rating: 5,
    comment: "Excellent sandwiches and quick delivery!",
    date: "2023-05-17",
  },
]

export function FeedbackTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Feedback ID</TableHead>
          <TableHead>Restaurant</TableHead>
          <TableHead>Rating</TableHead>
          <TableHead>Comment</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {feedback.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.restaurant}</TableCell>
            <TableCell>{item.rating}</TableCell>
            <TableCell>{item.comment}</TableCell>
            <TableCell>{item.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

