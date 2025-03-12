import type { Metadata } from "next"
import { SettingsForm } from "@/components/settings/settings-form"

export const metadata: Metadata = {
  title: "Settings | Food Delivery Admin",
  description: "Manage platform settings and configurations",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage platform settings and configurations</p>
      </div>

      <SettingsForm />
    </div>
  )
}

