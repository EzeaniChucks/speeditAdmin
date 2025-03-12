"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    total: 1800,
    orders: 120,
    users: 350,
  },
  {
    name: "Feb",
    total: 2200,
    orders: 145,
    users: 380,
  },
  {
    name: "Mar",
    total: 2800,
    orders: 180,
    users: 410,
  },
  {
    name: "Apr",
    total: 3300,
    orders: 210,
    users: 450,
  },
  {
    name: "May",
    total: 3800,
    orders: 250,
    users: 490,
  },
  {
    name: "Jun",
    total: 4300,
    orders: 280,
    users: 520,
  },
  {
    name: "Jul",
    total: 4800,
    orders: 310,
    users: 560,
  },
  {
    name: "Aug",
    total: 5200,
    orders: 340,
    users: 590,
  },
  {
    name: "Sep",
    total: 5600,
    orders: 370,
    users: 620,
  },
  {
    name: "Oct",
    total: 6000,
    orders: 400,
    users: 650,
  },
  {
    name: "Nov",
    total: 6400,
    orders: 430,
    users: 680,
  },
  {
    name: "Dec",
    total: 7000,
    orders: 470,
    users: 720,
  },
]

const chartConfig = {
  total: {
    label: "Revenue",
    theme: {
      light: "#4ade80",
      dark: "#4ade80",
    },
  },
  orders: {
    label: "Orders",
    theme: {
      light: "#60a5fa",
      dark: "#60a5fa",
    },
  },
  users: {
    label: "Users",
    theme: {
      light: "#f97316",
      dark: "#f97316",
    },
  },
}

export function Overview() {
  return (
    <ChartContainer config={chartConfig}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="total" radius={[4, 4, 0, 0]} />
          <Bar dataKey="orders" radius={[4, 4, 0, 0]} />
          <Bar dataKey="users" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

