"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "Developer Matching Platform",
    company: "by Ampersand Technologies",
    status: "IN REVIEW",
    statusColor: "bg-[#fcb76d]",
  },
  {
    id: 2,
    title: "Content Management System",
    company: "by Ampersand Technologies",
    status: "DRAFT",
    statusColor: "bg-[#61dafb]",
  },
  {
    id: 3,
    title: "Developer Matching Platform",
    company: "by Ampersand Technologies",
    status: "PENDING REVIEW OR ACCOUNT HOLDER",
    statusColor: "bg-[#fcb76d]",
  },
]

export function ProjectsSection() {

  const [activeTab, setActiveTab] = useState<"active" | "past">("active")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#2b3674]">Projects</h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab("active")}
            className={cn(
              "text-sm font-medium pb-1 border-b-2 transition-colors",
              activeTab === "active"
                ? "text-[#4318ff] border-[#4318ff]"
                : "text-[#8f9bba] border-transparent hover:text-[#2b3674]",
            )}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={cn(
              "text-sm font-medium pb-1 border-b-2 transition-colors",
              activeTab === "past"
                ? "text-[#4318ff] border-[#4318ff]"
                : "text-[#8f9bba] border-transparent hover:text-[#2b3674]",
            )}
          >
            Past
          </button>
        </div>
      </div>

      {activeTab === "active" && projects.length > 0 ? (
        <div className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-[#e9edf7] rounded-full flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-[#a3aed0] rounded opacity-50" />
          </div>
          <h3 className="text-[#2b3674] font-medium mb-2">You have no {activeTab} projects</h3>
          <p className="text-[#8f9bba] text-sm">Place a bid or get invited to join a project</p>
        </div>
      )}
    </div>
  )
}
