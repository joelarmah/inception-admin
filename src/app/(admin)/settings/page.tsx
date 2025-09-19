import { SettingsTabs } from "@/components/settings-tabs"

export default function SettingsPage() {
  return (
    <div className="max-w-6xl">
      <h1 className="text-2xl font-semibold text-[#2b3674] mb-8">Settings</h1>
      <SettingsTabs />
    </div>
  )
}
