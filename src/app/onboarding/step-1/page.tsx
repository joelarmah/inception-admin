"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AmpersandLogo } from "@/components/ampersand-logo"
import { theme } from "@/lib/theme"

const roles = [
  "Web Developer",
  "Fullstack Engineer",
  "Front-End Engineer",
  "Back-End Engineer",
  "Mobile Engineer",
  "Data Engineer",
  "Data Scientist",
  "Systems/DevOps Engineer",
  "Test Automation",
]

export default function ProfileStep1() {
  const [selectedRole, setSelectedRole] = useState<string>("")

  return (
    <div className="min-h-screen bg-white flex">
      <div className="w-1/2 flex flex-col px-20 py-16">
        <div className="mb-16">
          <AmpersandLogo />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">Step 1/5</p>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">What role best describes you ?</h1>
              <p className="text-gray-600">Provide your main and most experienced area</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-16">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-800">
              <Link href="/signup">Back</Link>
            </Button>
            <Button
              asChild
              className="rounded-sm h-12 px-8"
              style={{
                backgroundColor: selectedRole ? theme.colors.primary.blue : "#94a3b8",
                color: "white",
              }}
              disabled={!selectedRole}
            >
              <Link href="/developer/onboarding/step-2">Next</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-gray-50 flex items-center justify-center px-16">
        <div className="w-full max-w-sm space-y-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`w-full text-left px-6 py-4 rounded-sm border text-sm font-medium transition-colors ${
                selectedRole === role
                  ? "bg-blue-50 border-blue-200 text-blue-900"
                  : "bg-white border-gray-200 hover:border-gray-300 text-gray-700"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
