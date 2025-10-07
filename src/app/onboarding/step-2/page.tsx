"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AmpersandLogo } from "@/components/ampersand-logo"
import { WorkExperienceModal } from "@/components/work-experience-modal"
import { theme } from "@/lib/theme"
import { Plus, Linkedin } from "lucide-react"

export default function ProfileStep2() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [workExperiences, setWorkExperiences] = useState<unknown[]>([])

  const handleAddWorkExperience = (experience: unknown) => {
    setWorkExperiences((prev) => [...prev, experience])
  }

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
              <p className="text-sm text-gray-500 mb-2">Step 2/5</p>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Add any relevant work experience</h1>
              <p className="text-gray-600">
                If you are just starting out you can skip this step and tell us about an interesting project you have
                worked on
              </p>
            </div>

            {workExperiences.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-800">Added Work Experience</h3>
                {workExperiences.map((exp, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-sm bg-gray-50">
                    <h4 className="font-medium text-slate-800">{exp.title}</h4>
                    <p className="text-sm text-gray-600">
                      {exp.company} • {exp.city}, {exp.country}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-12">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-800">
              <Link href="/developer/onboarding/step-1">Back</Link>
            </Button>
            <Button
              asChild
              className="rounded-sm h-12 px-8"
              style={{
                backgroundColor: theme.colors.primary.blue,
                color: "white",
              }}
            >
              <Link href="/developer/onboarding/step-3">Next</Link>
            </Button>
          </div>
        </div>

                 <div className="flex-1 bg-gray-50 flex items-center justify-center px-8">
          <div className="w-full max-w-md space-y-4">
            <Button
              variant="outline"
              className="w-full h-12 rounded-sm border-gray-300 hover:border-gray-400 bg-white"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Work Experience
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

        <WorkExperienceModal open={isModalOpen} onOpenChange={setIsModalOpen} onSave={handleAddWorkExperience} />
      </div>
    </div>
  )
}
