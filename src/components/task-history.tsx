import { Button } from "@/components/ui/button"

export function TaskHistory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#2b3674]">Task History</h2>
        <Button variant="ghost" size="sm" className="text-[#4318ff] hover:text-[#4318ff]/80">
          See all
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-[#e9edf7] rounded-full flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-[#a3aed0] rounded opacity-50" />
        </div>
        <h3 className="text-[#2b3674] font-medium mb-2">You have no tasks</h3>
        <p className="text-[#8f9bba] text-sm">Place a bid or get invited to join a project</p>
      </div>
    </div>
  )
}
