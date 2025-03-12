import type { Metadata } from "next"
import { HelpCenter } from "@/components/help/help-center"

export const metadata: Metadata = {
  title: "Help & Support | Food Delivery Admin",
  description: "Access help resources and support for the admin dashboard",
}

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Help & Support</h2>
        <p className="text-muted-foreground">Access help resources and get support</p>
      </div>

      <HelpCenter />
    </div>
  )
}

