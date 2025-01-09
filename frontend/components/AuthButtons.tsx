"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const router = useRouter();

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-8 bg-gray-900">
      <h1 className="text-4xl font-extrabold text-gray-100">
        Welcome to the App
      </h1>
      <div className="flex flex-col items-center gap-6">
        <SignedOut>
          <div className="flex gap-6">
            <button
              onClick={() => router.push("/sign-in")}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out transform"
            >
              Sign In
            </button>
            <button
              onClick={() => router.push("/sign-up")}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition-all duration-300 ease-in-out transform"
            >
              Sign Up
            </button>
          </div>
        </SignedOut>

        <SignedIn>
          <p className="text-lg font-semibold text-gray-300">
            You already have an account.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => router.push("/dashboard")}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 transition-all duration-300 ease-in-out transform"
            >
              Go to Dashboard
            </button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </main>
  );
};

export default AuthButtons;
