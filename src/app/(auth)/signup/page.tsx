import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/logo-white.png"
          alt="Ace Logo"
          width={80}
          height={40}
          className="w-20 object-contain"
        />
      </div>

      {/* Login Text */}
      <h1 className="text-white text-xl font-medium mb-8">
        Create your workspace
      </h1>

      {/* Login Options Container */}
      <div className="w-full max-w-sm space-y-3">
        {/* Google Login */}
        <Button
          className="w-full h-12 bg-[#4285f4] hover:bg-[#357ae8] text-white rounded-md font-medium"
          variant="ghost"
        >
          Continue with Google
        </Button>

        {/* Email Login */}
        <Button
          className="w-full h-12 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md font-medium"
          variant="ghost"
        >
          Continue with email
        </Button>

        {/* SAML SSO Login */}
        <Button
          className="w-full h-12 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md font-medium"
          variant="ghost"
        >
          Continue with SAML SSO
        </Button>
      </div>

      {/* Terms and Agreement */}
      <div className="mt-8 text-center text-sm text-zinc-500">
        <p>
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-white hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-white hover:underline">
            Data Processing Agreement
          </Link>
        </p>
      </div>

      {/* Divider */}
      <div className="my-8 w-full max-w-sm flex items-center justify-center">
        <div className="w-full border-t border-zinc-800"></div>
      </div>

      {/* Login Link */}
      <div className="text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="text-white hover:underline font-medium">
          Login →
        </Link>
      </div>
    </div>
  );
}
