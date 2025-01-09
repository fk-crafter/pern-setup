import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-md">
        <SignUp
          routing="path"
          path="/sign-up"
          afterSignUpUrl="/protected"
          appearance={{
            elements: {
              card: "bg-gray-800 text-gray-100 shadow-lg",
              title: "text-white",
              subtitle: "text-gray-300",
              formFieldLabel: "text-gray-300",
              formFieldInput:
                "bg-gray-700 text-gray-100 border-gray-600 rounded-md",
              formButtonPrimary:
                "bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-md transition-all duration-300",
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
