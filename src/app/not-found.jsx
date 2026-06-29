"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, SearchX } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | MediQueue",
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-indigo-50 px-6">
      <div className="max-w-xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100">
            <SearchX className="h-14 w-14 text-primary" />
          </div>
        </div>

        <h1 className="text-8xl font-extrabold text-primary">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          Sorry! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link href="/">
          <Button className="mt-8 rounded-xl bg-primary px-8 py-6 text-white">
            <Home size={18} />
            Back To Home
          </Button>
        </Link>
      </div>
    </section>
  );
}