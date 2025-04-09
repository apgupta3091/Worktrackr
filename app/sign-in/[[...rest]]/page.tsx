import React from "react";
import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}

export default SignInPage;
