"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { GeneralSettings } from "../sections/settings/general-settings"
import { BillingSettings } from "../sections/settings/billing-settings"
import { CompanySettings } from "../sections/settings/company-settings"
import { TeamSettings } from "../sections/settings/team-settings"
import { TasksSettings } from "../sections/settings/tasks-settings"
import { AdvancedSettings } from "../sections/settings/advanced-settings"

const tabs = [
  { id: "general", label: "General", component: GeneralSettings },
  { id: "billing", label: "Billing", component: BillingSettings },
  { id: "company", label: "Company", component: CompanySettings },
  { id: "team", label: "Team", component: TeamSettings },
  { id: "tasks", label: "Tasks", component: TasksSettings },
  { id: "settings", label: "Settings", component: AdvancedSettings },
]

export function SettingsTabs() {
  
  const [activeTab, setActiveTab] = useState("general")

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component || GeneralSettings

  return (
    <div>
      <div className="border-b border-[#e0e5f2] mb-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
                activeTab === tab.id
                  ? "border-[#4318ff] text-[#4318ff]"
                  : "border-transparent text-[#a3aed0] hover:text-[#2b3674] hover:border-[#e0e5f2]",
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <ActiveComponent />
    </div>
  )
}
