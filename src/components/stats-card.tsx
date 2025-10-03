import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  subtitle?: string | number
  icon: LucideIcon
  iconBg: string
}

export function StatsCard({ title, value, subtitle, icon: Icon, iconBg }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e0e5f2]">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-[#8f9bba] text-sm font-medium">{title}</p>
          <p className="text-[#2b3674] text-2xl font-bold">{value}</p>
          {subtitle && <p className="text-[#8f9bba] text-xs">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
