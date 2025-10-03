"use client";

import Link from "next/link";
import { ArrowLeft, Bell, User } from "lucide-react";
import { AmpersandLogo } from "@/components/ampersand-logo";
import { Button } from "../ui/button";
import { useClerk, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { signOut as authSignOut } from "@/services/authService";

type HeaderProps = {
  isAuth?: boolean;
};

export function Header({ isAuth = false }: HeaderProps) {

  if (!isAuth) {
    const { user } = useUser();
    const { signOut: clerkSignOut } = useClerk();
    const [isOpen, setIsOpen] = useState(false);

    const handleSignOut = async () => {
      setIsOpen(false);

      try {
        // 1. Call your backend authservice to clear server session
        await authSignOut();
  
        // 2. When backend confirms, call Clerk signOut
        await clerkSignOut();
  
      } catch (err) {
        console.error("Sign out failed:", err);
        // optional: show toast or fallback to force signOut
        await clerkSignOut();
      }
    }

    return (
      <header className="">
        <div className="max-w mx-auto py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              {/* <h1 className="text-2xl font-bold text-[#2b3674]">Dashboard</h1> */}
            </Link>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-[#8f9bba]">
                <Bell className="w-5 h-5" />
              </Button>

              {user ? (
                <div className="relative">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-10 h-10 bg-[#4318ff] rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                      <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>

                      <button
                        onClick={() => {
                          handleSignOut()
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/sign-in"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Sign In
                </Link>
              )}

              {/* <div className="w-10 h-10 bg-[#4318ff] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div> */}
            </div>
          </div>
        </div>
      </header>
    );
  
  } else {
    return (
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to dashboard
        </Link>
        <AmpersandLogo />
      </div>
    );
  }
  
}
