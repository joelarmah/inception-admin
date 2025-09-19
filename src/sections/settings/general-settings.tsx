import { Switch } from "@/components/ui/switch"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const notificationSettings = [
  { id: "item-updates", label: "Item update notifications", enabled: true },
  { id: "item-comments", label: "Item comment notifications", enabled: false },
  { id: "buyer-reviews", label: "Buyer review notifications", enabled: true },
  { id: "rating-reminders", label: "Rating reminders notifications", enabled: false },
  { id: "meetups", label: "Meetups near you notifications", enabled: false },
  { id: "company-news", label: "Company news notifications", enabled: true },
  { id: "new-launches", label: "New launches and projects", enabled: true },
  { id: "product-changes", label: "Monthly product changes", enabled: false },
  { id: "newsletter", label: "Subscribe to newsletter", enabled: false },
  { id: "follow-notifications", label: "Email me when someone follows me", enabled: true },
]

export function GeneralSettings() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm border border-[#e0e5f2]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#2b3674]">Notifications</h2>
        <Button variant="ghost" size="sm" className="text-[#a3aed0]">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-6">
        {notificationSettings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between">
            <label htmlFor={setting.id} className="text-sm font-medium text-[#2b3674] cursor-pointer">
              {setting.label}
            </label>
            <Switch id={setting.id} defaultChecked={setting.enabled} className="data-[state=checked]:bg-[#4318ff]" />
          </div>
        ))}
      </div>
    </div>
  )
}
