"use client"

import { useState } from "react"
import { StatsCard } from "@/components/stats-card"
import { ProjectCard } from "@/components/project-card"
import { LeaderBoard } from "@/components/leader-board"
import { GetStartedChecklist } from "@/components/get-started-checklist"
import { EmptyState } from "@/components/empty-state"
import { TrendingUp, CheckCircle, FolderOpen, Bell, User, Folder, Clock } from "lucide-react"

export default function DashboardPage() {
  
  const [showPopulatedData, setShowPopulatedData] = useState(false)

  const projects = showPopulatedData
    ? [
        {
          title: "Abstract Colors",
          author: "Esthera Jackson",
          currentBid: "0.91 ETH",
          gradientClass: "project-gradient-1",
        },
        {
          title: "ETH AI Brain",
          author: "Nick Wilson",
          currentBid: "2.82 ETH",
          gradientClass: "project-gradient-2",
        },
        {
          title: "Mesh Gradients",
          author: "Will Smith",
          currentBid: "0.56 ETH",
          gradientClass: "project-gradient-3",
        },
      ]
    : []

  const recentProjects = showPopulatedData
    ? [
        {
          title: "Swipe Circles",
          author: "Peter Will",
          currentBid: "2.30 ETH",
          gradientClass: "project-gradient-4",
        },
        {
          title: "Colorful Heaven",
          author: "Mark Benjamin",
          currentBid: "1.30 ETH",
          gradientClass: "project-gradient-5",
        },
        {
          title: "3D Cubes Art",
          author: "Manny Gates",
          currentBid: "6.58 ETH",
          gradientClass: "project-gradient-6",
        },
      ]
    : []

  const taskHistory = showPopulatedData
    ? [
        {
          title: "Colorful Heaven",
          author: "Mark Benjamin",
          amount: "1.30 ETH",
          timeAgo: "30s ago",
          gradientClass: "project-gradient-5",
        },
        {
          title: "Abstract Colors",
          author: "Esthera Jackson",
          amount: "0.91 ETH",
          timeAgo: "58s ago",
          gradientClass: "project-gradient-1",
        },
        {
          title: "ETH AI Brain",
          author: "Nick Wilson",
          amount: "2.82 ETH",
          timeAgo: "1m ago",
          gradientClass: "project-gradient-2",
        },
      ]
    : []

  const mockLeaders = [
    { name: "M", username: "@maddison_c21", tokens: 9821 },
    { name: "K", username: "@karl.will02", tokens: 7032 },
    { name: "A", username: "@andreea.1z", tokens: 6904 },
    { name: "A", username: "@abraham47.y", tokens: 4309 },
    { name: "S", username: "@simmmple.web", tokens: 3871 },
    { name: "V", username: "@venus.sys", tokens: 3152 },
    { name: "E", username: "@ape.vpp8", tokens: 2907 },
    { name: "L", username: "@leon_pwrr", tokens: 2309 },
  ]

  const mockChecklist = [
    {
      title: "Complete Profile",
      subtitle: "Submit test to accept and place bids",
      completed: true,
    },
    {
      title: "Take Test",
      subtitle: "Submit test based on your skillset",
      completed: false,
    },
    {
      title: "Payout",
      subtitle: "Provide details of how you wish to be paid",
      completed: false,
    },
  ]

  return (
    <div className="grid grid-cols-12 gap-6">
    <div className="col-span-8">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatsCard title="Earnings" value="€350.4" icon={TrendingUp} iconBg="bg-[#4318ff]" />
        <StatsCard title="New Tasks" value="154" subtitle="+23% since last month" icon={CheckCircle} iconBg="bg-[#4318ff]" />
        <StatsCard title="Total Projects" value="2" icon={Folder} iconBg="bg-[#4318ff]" />
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#2b3674] mb-6">Projects</h3>
        {projects.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {projects.map((project, i) => <ProjectCard key={i} {...project} />)}
          </div>
        ) : (
          <EmptyState
            icon={Folder}
            title="You have no active projects"
            description="Place a bid or get invited to join a project"
            actionText="Browse projects"
            onAction={() => console.log("Browse projects")}
          />
        )}
      </div>

      {/* Recently Added */}
      <h3 className="text-xl font-bold text-[#2b3674] mb-6">Recently Added</h3>
      {recentProjects.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {recentProjects.map((project, i) => <ProjectCard key={i} {...project} />)}
        </div>
      ) : (
        <EmptyState
          icon={Folder}
          title="No recent projects"
          description="New projects will appear here when they're added"
        />
      )}
    </div>

    <div className="col-span-4 space-y-6">
      <GetStartedChecklist items={mockChecklist} />
      <LeaderBoard leaders={mockLeaders} />

      <div className="bg-white rounded-2xl p-6 border border-[#e0e5f2]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-[#2b3674] text-lg">Task History</h3>
          <button className="text-[#4318ff] text-sm font-medium">See all</button>
        </div>
        {taskHistory.length > 0 ? (
          <div className="space-y-2">
            {taskHistory.map((task, i) => <div key={i}>{task.title}</div>)}
          </div>
        ) : (
          <EmptyState icon={Clock} title="You have no tasks" description="Place a bid or get invited to join a project" />
        )}
      </div>
    </div>
  </div>
  )
}
