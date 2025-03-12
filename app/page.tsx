import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to login page if not authenticated, or to dashboard if authenticated
  // For now, we'll just redirect to login
  redirect("/login")
}

