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
import { ArrowUpDown, MoreHorizontal, UserCog } from "lucide-react"

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
import { UserDialog } from "@/components/users/user-dialog"

// Define user types
type UserRole = "customer" | "delivery" | "admin"

type User = {
  id: string
  name: string
  email: string
  phone: string
  role: UserRole
  status: "active" | "inactive" | "suspended"
  orders: number
  joinedDate: string
  avatar?: string
}

// Sample data
const users: User[] = [
  {
    id: "u1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    role: "customer",
    status: "active",
    orders: 12,
    joinedDate: "2023-01-15",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 987-6543",
    role: "customer",
    status: "active",
    orders: 8,
    joinedDate: "2023-02-20",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u3",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    phone: "+1 (555) 234-5678",
    role: "delivery",
    status: "active",
    orders: 0,
    joinedDate: "2023-03-10",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u4",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+1 (555) 876-5432",
    role: "customer",
    status: "inactive",
    orders: 3,
    joinedDate: "2023-01-05",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u5",
    name: "Michael Wilson",
    email: "michael.w@example.com",
    phone: "+1 (555) 345-6789",
    role: "delivery",
    status: "active",
    orders: 0,
    joinedDate: "2023-02-15",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u6",
    name: "Sarah Brown",
    email: "sarah.b@example.com",
    phone: "+1 (555) 765-4321",
    role: "customer",
    status: "suspended",
    orders: 1,
    joinedDate: "2023-03-25",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u7",
    name: "David Miller",
    email: "david.m@example.com",
    phone: "+1 (555) 456-7890",
    role: "admin",
    status: "active",
    orders: 0,
    joinedDate: "2023-01-10",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u8",
    name: "Jennifer Taylor",
    email: "jennifer.t@example.com",
    phone: "+1 (555) 654-3210",
    role: "customer",
    status: "active",
    orders: 5,
    joinedDate: "2023-02-05",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u9",
    name: "James Anderson",
    email: "james.a@example.com",
    phone: "+1 (555) 567-8901",
    role: "delivery",
    status: "inactive",
    orders: 0,
    joinedDate: "2023-03-15",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "u10",
    name: "Lisa Thomas",
    email: "lisa.t@example.com",
    phone: "+1 (555) 543-2109",
    role: "customer",
    status: "active",
    orders: 7,
    joinedDate: "2023-01-20",
    avatar: "/placeholder-user.jpg",
  },
]

export function UsersTable({ userType }: { userType: "all" | UserRole }) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Filter users based on userType
  const filteredUsers = userType === "all" ? users : users.filter((user) => user.role === userType)

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        const user = row.original
        return (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="font-medium">{user.name}</div>
          </div>
        )
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => {
        const role = row.getValue("role") as string
        return (
          <Badge variant={role === "admin" ? "default" : role === "delivery" ? "secondary" : "outline"}>
            {role.charAt(0).toUpperCase() + role.slice(1)}
          </Badge>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge variant={status === "active" ? "success" : status === "inactive" ? "outline" : "destructive"}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        )
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
        const user = row.original

        return (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setSelectedUser(user)
                setIsDialogOpen(true)
              }}
            >
              <UserCog className="h-4 w-4" />
              <span className="sr-only">Edit user</span>
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
                    setSelectedUser(user)
                    setIsDialogOpen(true)
                  }}
                >
                  Edit user
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View orders</DropdownMenuItem>
                <DropdownMenuItem>Reset password</DropdownMenuItem>
                <DropdownMenuSeparator />
                {user.status === "active" ? (
                  <DropdownMenuItem className="text-amber-600">Suspend user</DropdownMenuItem>
                ) : user.status === "suspended" ? (
                  <DropdownMenuItem className="text-green-600">Reactivate user</DropdownMenuItem>
                ) : (
                  <DropdownMenuItem className="text-green-600">Activate user</DropdownMenuItem>
                )}
                <DropdownMenuItem className="text-destructive">Delete user</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      },
    },
  ]

  const table = useReactTable({
    data: filteredUsers,
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
                  No users found.
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

      {selectedUser && <UserDialog user={selectedUser} open={isDialogOpen} onOpenChange={setIsDialogOpen} />}
    </div>
  )
}

