"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SettingsForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">General Settings</h3>
        <div className="space-y-1">
          <Label htmlFor="platform-name">Platform Name</Label>
          <Input id="platform-name" defaultValue="Food Delivery Admin" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="support-email">Support Email</Label>
          <Input id="support-email" defaultValue="support@fooddelivery.com" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Notification Settings</h3>
        <div className="space-y-1">
          <Label htmlFor="email-notifications">Email Notifications</Label>
          <Input id="email-notifications" type="checkbox" className="w-4 h-4" defaultChecked />
        </div>
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  )
}

