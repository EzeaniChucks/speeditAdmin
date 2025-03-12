"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"
import { Store } from "lucide-react"

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

const restaurantFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  cuisine: z.string().min(2, {
    message: "Cuisine must be at least 2 characters.",
  }),
  status: z.enum(["active", "pending", "inactive"], {
    required_error: "Please select a status.",
  }),
})

type RestaurantFormValues = z.infer<typeof restaurantFormSchema>

export function RestaurantDialog({
  restaurant,
  open,
  onOpenChange,
}: {
  restaurant: Restaurant
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<RestaurantFormValues>({
    resolver: zodResolver(restaurantFormSchema),
    defaultValues: {
      name: restaurant.name,
      email: restaurant.email,
      phone: restaurant.phone,
      address: restaurant.address,
      cuisine: restaurant.cuisine,
      status: restaurant.status,
    },
  })

  function onSubmit(data: RestaurantFormValues) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
      onOpenChange(false)

      toast({
        title: "Restaurant updated",
        description: "Restaurant information has been updated successfully.",
      })
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Restaurant</DialogTitle>
          <DialogDescription>Update restaurant information and settings</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="hours">Hours & Delivery</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4 py-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={restaurant.logo} alt={restaurant.name} />
                <AvatarFallback>
                  <Store className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium">{restaurant.name}</h3>
                <p className="text-sm text-muted-foreground">Restaurant ID: {restaurant.id}</p>
                <p className="text-sm text-muted-foreground">
                  Joined: {new Date(restaurant.joinedDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Restaurant Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter restaurant name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter restaurant address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cuisine"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cuisine Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter cuisine type" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="pending">Pending Approval</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <DialogFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save changes"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="menu" className="py-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Restaurant Menu</h3>
              <p className="text-sm text-muted-foreground">Manage menu items, categories, and pricing.</p>

              <div className="rounded-md border p-4">
                <p className="text-sm font-medium">Menu Items</p>
                <p className="text-sm text-muted-foreground">
                  This restaurant has {restaurant.status === "pending" ? "no" : "15"} menu items.
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Manage Menu
                </Button>
              </div>

              <div className="rounded-md border p-4">
                <p className="text-sm font-medium">Categories</p>
                <p className="text-sm text-muted-foreground">
                  This restaurant has {restaurant.status === "pending" ? "no" : "4"} menu categories.
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Manage Categories
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Detailed menu management will be implemented in a future update.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="hours" className="py-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Operating Hours & Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Configure restaurant operating hours and delivery settings.
              </p>

              <div className="rounded-md border p-4">
                <p className="text-sm font-medium">Operating Hours</p>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 10:00 PM
                  <br />
                  Saturday - Sunday: 10:00 AM - 11:00 PM
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Edit Hours
                </Button>
              </div>

              <div className="rounded-md border p-4">
                <p className="text-sm font-medium">Delivery Settings</p>
                <p className="text-sm text-muted-foreground">
                  Delivery Radius: 5 miles
                  <br />
                  Minimum Order: $15.00
                  <br />
                  Delivery Fee: $2.99
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Edit Delivery Settings
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Detailed hours and delivery management will be implemented in a future update.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

