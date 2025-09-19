import { Check, Circle } from "lucide-react"

interface ChecklistItem {
  title: string
  subtitle: string
  completed: boolean
}

interface GetStartedChecklistProps {
  items: ChecklistItem[]
}

export function GetStartedChecklist({ items }: GetStartedChecklistProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e0e5f2]">
      <h3 className="font-bold text-[#2b3674] text-lg mb-6">Get Started</h3>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                item.completed ? "bg-green-500" : "bg-[#e0e5f2]"
              }`}
            >
              {item.completed ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Circle className="w-4 h-4 text-[#8f9bba]" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium text-[#2b3674] text-sm">{item.title}</p>
              <p className="text-[#8f9bba] text-xs">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
