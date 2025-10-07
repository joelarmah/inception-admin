"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  // const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-pink-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">
                Inception Platform
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/sign-in"
                className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="px-4 py-2 text-white hover:text-purple-300 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Globe className="w-6 h-6 text-purple-400" />
              <span className="text-white font-medium">Inception Platform</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Inception Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
