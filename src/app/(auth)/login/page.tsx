import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Login() {
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
      <h1 className="text-white text-xl font-medium mb-8">Login to Ace</h1>

      {/* Login Options Container */}
      <div className="w-full max-w-sm space-y-3">
        {/* Google Login */}
        <Button
          className="w-full h-12 bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-md font-medium"
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

        {/* Passkey Login */}
        <Button
          className="w-full h-12 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md font-medium"
          variant="ghost"
        >
          Login with Passkey
        </Button>
      </div>
    </div>
  );
}
