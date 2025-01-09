import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
        <SignIn
          routing="path"
          path="/sign-in"
          afterSignInUrl="/protected"
          appearance={{
            elements: {
              card: "bg-gray-800 text-gray-100 shadow-md",
              title: "text-white font-bold",
              subtitle: "text-gray-300",
              formFieldLabel: "text-gray-300 font-medium",
              formFieldInput:
                "bg-gray-700 text-gray-100 border-gray-600 rounded-md",
              formButtonPrimary:
                "bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition-all duration-300",
              footerActionText: "text-gray-400",
              footerActionLink: "text-blue-500 hover:text-blue-400",
              footer: "bg-gray-800 text-gray-400 border-t border-gray-700",
            },
          }}
        />
      </div>
    </div>
  );
}
