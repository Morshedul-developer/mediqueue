"use client";

import { Button } from "@heroui/react";
import { TriangleAlert, RotateCcw } from "lucide-react";

export default function Error({ error, reset }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-br from-red-50 via-white to-orange-50 px-6">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <TriangleAlert className="h-12 w-12 text-red-600" />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Something Went Wrong
        </h1>

        <p className="mt-4 text-gray-600">
          An unexpected error occurred while loading this page.
        </p>

        <Button
          onPress={reset}
          className="mt-8 rounded-xl bg-primary px-8 py-6 text-white"
        >
          <RotateCcw size={18} />
          Try Again
        </Button>
      </div>
    </section>
  );
}