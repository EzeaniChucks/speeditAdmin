"use client"

import { useState } from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RestaurantDialog } from "@/components/restaurants/restaurant-dialog"

// Define restaurant types
type RestaurantStatus = "active" | "pending" | "inactive"

type Restaurant = {
  id: string
  name: string
  address: string
  phone: string
  email: string
  cuisine: string
  status: RestaurantStatus
  rating: number
  orders: number
  joinedDate: string
  logo?: string
}

// Sample data
const restaurants: Restaurant[] = [
  {
    id: "r1",
    name: "Burger King",
    address: "123 Main St, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "contact@burgerking.com",
    cuisine: "Fast Food",
    status: "active",
    rating: 4.2,
    orders: 1250,
    joinedDate: "2023-01-15",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r2",
    name: "Pizza Hut",
    address: "456 Broadway, New York, NY 10002",
    phone: "+1 (555) 987-6543",
    email: "contact@pizzahut.com",
    cuisine: "Pizza",
    status: "active",
    rating: 4.0,
    orders: 980,
    joinedDate: "2023-02-20",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r3",
    name: "Taco Bell",
    address: "789 5th Ave, New York, NY 10003",
    phone: "+1 (555) 234-5678",
    email: "contact@tacobell.com",
    cuisine: "Mexican",
    status: "active",
    rating: 3.8,
    orders: 750,
    joinedDate: "2023-03-10",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r4",
    name: "Subway",
    address: "321 Park Ave, New York, NY 10004",
    phone: "+1 (555) 876-5432",
    email: "contact@subway.com",
    cuisine: "Sandwiches",
    status: "inactive",
    rating: 3.9,
    orders: 620,
    joinedDate: "2023-01-05",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r5",
    name: "KFC",
    address: "654 Lexington Ave, New York, NY 10005",
    phone: "+1 (555) 345-6789",
    email: "contact@kfc.com",
    cuisine: "Fried Chicken",
    status: "active",
    rating: 4.1,
    orders: 890,
    joinedDate: "2023-02-15",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r6",
    name: "Chipotle",
    address: "987 Madison Ave, New York, NY 10006",
    phone: "+1 (555) 765-4321",
    email: "contact@chipotle.com",
    cuisine: "Mexican",
    status: "pending",
    rating: 0,
    orders: 0,
    joinedDate: "2023-03-25",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r7",
    name: "Domino's Pizza",
    address: "135 West St, New York, NY 10007",
    phone: "+1 (555) 456-7890",
    email: "contact@dominos.com",
    cuisine: "Pizza",
    status: "active",
    rating: 3.7,
    orders: 720,
    joinedDate: "2023-01-10",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r8",
    name: "Panera Bread",
    address: "246 East St, New York, NY 10008",
    phone: "+1 (555) 654-3210",
    email: "contact@panera.com",
    cuisine: "Bakery",
    status: "active",
    rating: 4.3,
    orders: 540,
    joinedDate: "2023-02-05",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r9",
    name: "Olive Garden",
    address: "369 North St, New York, NY 10009",
    phone: "+1 (555) 567-8901",
    email: "contact@olivegarden.com",
    cuisine: "Italian",
    status: "pending",
    rating: 0,
    orders: 0,
    joinedDate: "2023-03-15",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "r10",
    name: "Starbucks",
    address: "159 South St, New York, NY 10010",
    phone: "+1 (555) 543-2109",
    email: "contact@starbucks.com",
    cuisine: "Coffee",
    status: "active",
    rating: 4.5,
    orders: 1100,
    joinedDate: "2023-01-20",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

export function RestaurantsTable({ status }: { status: "all" | RestaurantStatus }) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Filter restaurants based on status
  const filteredRestaurants =
    status === "all" ? restaurants : restaurants.filter((restaurant) => restaurant.status === status)

  const columns: ColumnDef<Restaurant>[] = [
    {
      accessorKey: "name",
      header: "Restaurant",
      cell: ({ row }) => {
        const restaurant = row.original
        return (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={restaurant.logo} alt={restaurant.name} />
              <AvatarFallback>
                <Store className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="font-medium">{restaurant.name}</div>
          </div>
        )
      },
    },
    {
      accessorKey: "cuisine",
      header: "Cuisine",
    },
    {
      accessorKey: "address",
      header: "Address",
      cell: ({ row }) => {
        const address = row.getValue("address") as string
        return <div className="truncate max-w-[200px]">{address}</div>
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge variant={status === "active" ? "success" : status === "pending" ? "secondary" : "outline"}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        )
      },
    },
    {
      accessorKey: "rating",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Rating
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const rating = Number.parseFloat(row.getValue("rating"))
        return <div className="text-center font-medium">{rating > 0 ? rating.toFixed(1) : "N/A"}</div>
      },
    },
    {
      accessorKey: "orders",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Orders
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const orders = Number.parseFloat(row.getValue("orders"))
        return <div className="text-center font-medium">{orders}</div>
      },
    },
    {
      accessorKey: "joinedDate",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Joined Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("joinedDate"))
        return <div>{date.toLocaleDateString()}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const restaurant = row.original

        return (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setSelectedRestaurant(restaurant)
                setIsDialogOpen(true)
              }}
            >
              <Store className="h-4 w-4" />
              <span className="sr-only">Edit restaurant</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    setSelectedRestaurant(restaurant)
                    setIsDialogOpen(true)
                  }}
                >
                  Edit restaurant
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View menu</DropdownMenuItem>
                <DropdownMenuItem>View orders</DropdownMenuItem>
                <DropdownMenuSeparator />
                {restaurant.status === "active" ? (
                  <DropdownMenuItem className="text-amber-600">Deactivate restaurant</DropdownMenuItem>
                ) : restaurant.status === "pending" ? (
                  <DropdownMenuItem className="text-green-600">Approve restaurant</DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="text-green-600">Activate restaurant</DropdownMenuItem>
                )}
                <DropdownMenuItem className="text-destructive">Delete restaurant</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ]

  const table = useReactTable({
    data: filteredRestaurants,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No restaurants found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>

      {selectedRestaurant && (
        <RestaurantDialog restaurant={selectedRestaurant} open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      )}
    </div>
  )
}

