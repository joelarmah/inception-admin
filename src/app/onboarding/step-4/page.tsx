"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { AmpersandLogo } from "@/components/ampersand-logo"
import { theme } from "@/lib/theme"
import { Search, X } from "lucide-react"

const availableTechs = [
  "Vue",
  "Flutter",
  "Javascript",
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "Angular",
  "PHP",
  "Java",
  "C#",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",
  "Docker",
  "AWS",
  "MongoDB",
  "PostgreSQL",
]

export default function ProfileStep4() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTechs, setSelectedTechs] = useState<string[]>(["Vue", "Flutter", "Javascript"])

  const filteredTechs = availableTechs.filter(
    (tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedTechs.includes(tech),
  )

  const addTech = (tech: string) => {
    if (!selectedTechs.includes(tech)) {
      setSelectedTechs([...selectedTechs, tech])
    }
    setSearchTerm("")
  }

  const removeTech = (tech: string) => {
    setSelectedTechs(selectedTechs.filter((t) => t !== tech))
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
              <p className="text-sm text-gray-500 mb-2">Step 4/5</p>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">What's your stack?</h1>
              <p className="text-gray-600">Provide your main and most experienced area</p>
            </div>

                         <div className="space-y-4">
               <div className="flex flex-wrap gap-2">
                {selectedTechs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm text-white"
                    style={{ backgroundColor: theme.colors.primary.blue }}
                  >
                    {tech}
                    <button onClick={() => removeTech(tech)} className="ml-2 hover:opacity-80 rounded-full p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>

                             {searchTerm && filteredTechs.length > 0 && (
                <div className="bg-white border border-gray-300 rounded-sm shadow-sm max-h-48 overflow-y-auto">
                  {filteredTechs.slice(0, 8).map((tech) => (
                    <button
                      key={tech}
                      onClick={() => addTech(tech)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 border-b border-gray-200 last:border-b-0"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-800">
              <Link href="/developer/onboarding/step-3">Back</Link>
            </Button>
            <Button
              asChild
              className="rounded-sm h-12 px-8"
              style={{
                backgroundColor: selectedTechs.length > 0 ? theme.colors.primary.blue : "#94a3b8",
                color: "white",
              }}
              disabled={selectedTechs.length === 0}
            >
              <Link href="/developer/onboarding/step-5">Next</Link>
            </Button>
          </div>
        </div>

                 <div className="flex-1 bg-gray-50 flex items-start justify-center px-8 py-20">
           <div className="w-full max-w-md space-y-4">
             <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search stack..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white h-12 rounded-sm border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
