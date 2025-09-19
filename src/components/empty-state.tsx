"use client"

import type { LucideIcon } from "lucide-react"

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  actionText?: string
  onAction?: () => void
}

export function EmptyState({ icon: Icon, title, description, actionText, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="w-16 h-16 bg-[#f4f7fe] rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-[#8f9bba]" />
      </div>
      <h3 className="font-medium text-[#2b3674] text-lg mb-2">{title}</h3>
      <p className="text-[#8f9bba] text-sm mb-6 max-w-sm">{description}</p>
      {actionText && onAction && (
        <button onClick={onAction} className="text-[#4318ff] text-sm font-medium hover:underline">
          {actionText}
        </button>
      )}
    </div>
  )
}
