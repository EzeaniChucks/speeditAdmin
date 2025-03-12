import type { Metadata } from "next";
import Link from "next/link";

import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login | Food Delivery Admin",
  description: "Login to the food delivery admin dashboard",
};

export default function LoginPage() {
  return (
    <div className="container relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* LOG IN SECTION */}
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Admin Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access the dashboard
            </p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/forgot-password"
              className="hover:text-brand underline underline-offset-4"
            >
              Forgot your password?
            </Link>
          </p>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
            <path d="M12 8v1" />
            <path d="M12 15v1" />
            <path d="M16 12h-1" />
            <path d="M9 12H8" />
          </svg> */}
          {/* logo */}
          <Image
            src={"/logo.png"}
            alt="logo"
            width={40}
            height={40}
            className="mx-2"
          />
          Speedit Admin
        </div>
        <div className="flex items-center justify-center relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">The delivery app of the future</p>
            {/* <footer className="text-sm">Sofia Davis, Restaurant Owner</footer> */}
          </blockquote>
        </div>
      </div>
    </div>
  );
}
