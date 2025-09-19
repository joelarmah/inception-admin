"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AmpersandLogo } from "@/components/ampersand-logo"
import { theme } from "@/lib/theme"

const experienceYears = ["0-1 years", "1-2 years", "2-3 years", "3-5 years", "5-7 years", "7-10 years", "10+ years"]

export default function ProfileStep3() {
  const [selectedYears, setSelectedYears] = useState<string>("")

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
              <p className="text-sm text-gray-500 mb-2">Step 3/5</p>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">
                How many years of work experience do you have in this role?
              </h1>
              <p className="text-gray-600">Count full time since you graduated or completed any training</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-800">
              <Link href="/developer/onboarding/step-2">Back</Link>
            </Button>
            <Button
              asChild
              className="rounded-sm h-12 px-8"
              style={{
                backgroundColor: selectedYears ? theme.colors.primary.blue : "#94a3b8",
                color: "white",
              }}
              disabled={!selectedYears}
            >
              <Link href="/developer/onboarding/step-4">Next</Link>
            </Button>
          </div>
        </div>

                 <div className="flex-1 bg-gray-50 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            <Select value={selectedYears} onValueChange={setSelectedYears}>
              <SelectTrigger className="w-full h-12 rounded-sm border-gray-300 bg-white">
                <SelectValue placeholder="Select years" />
              </SelectTrigger>
              <SelectContent>
                {experienceYears.map((years) => (
                  <SelectItem key={years} value={years}>
                    {years}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
