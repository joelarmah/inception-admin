"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AmpersandLogo } from "@/components/ampersand-logo";
import { theme } from "@/lib/theme";
import { Plus, Linkedin } from "lucide-react";

export default function ProfileStep5() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-between p-6">
        <AmpersandLogo />
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Home</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/profile-image.png" alt="Profile" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 max-w-2xl">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">Step 5/5</p>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                Add any education background
              </h1>
              <p className="text-gray-600">
                If you are just starting out you can skip this step and tell us
                about an interesting project you have worked on
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <Button
              variant="ghost"
              asChild
              className="text-gray-600 hover:text-gray-800"
            >
              <Link href="/developer/onboarding/step-4">Back</Link>
            </Button>
            <Button
              asChild
              className="rounded-sm h-12 px-8"
              style={{
                backgroundColor: theme.colors.primary.blue,
                color: "white",
              }}
            >
              <Link href="/dashboard">Next</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 flex items-center justify-center px-8">
          <div className="w-full max-w-md space-y-4">
            <Button
              variant="outline"
              className="w-full h-12 rounded-sm border-gray-300 hover:border-gray-400 bg-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Educational Background
            </Button>

            <Button
              className="w-full h-12 rounded-sm text-white"
              style={{
                backgroundColor: theme.colors.social.linkedin,
              }}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Import from LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
