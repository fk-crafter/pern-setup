"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ProtectedPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-bold text-white">connected</h1>

      <SignedIn>
        <p className="text-gray-300">welcome to the dashboard page</p>
        <UserButton afterSignOutUrl="/" />
        <button
          onClick={() => router.push("/dashboard")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
        >
          Go to Dashboard
        </button>
      </SignedIn>

      <SignedOut>
        <p className="text-gray-300">
          tu dois être connecté pour accéder à cette page.
        </p>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
