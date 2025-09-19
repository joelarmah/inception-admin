interface TaskHistoryItemProps {
  title: string
  author: string
  amount: string
  timeAgo: string
  gradientClass: string
}

export function TaskHistoryItem({ title, author, amount, timeAgo, gradientClass }: TaskHistoryItemProps) {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className={`w-12 h-12 rounded-xl ${gradientClass}`} />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-[#2b3674] text-sm truncate">{title}</p>
        <p className="text-[#8f9bba] text-xs">By {author}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-[#2b3674] text-sm">{amount}</p>
        <p className="text-[#8f9bba] text-xs">{timeAgo}</p>
      </div>
    </div>
  )
}
