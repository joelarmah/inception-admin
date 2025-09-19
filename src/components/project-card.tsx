interface ProjectCardProps {
  project: {
    title: string
    id: number
    company: string
    status: string
    statusColor: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#e2e8f0] hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-[#2b3674] text-lg mb-1">{project.title}</h3>
          <p className="text-[#8f9bba] text-sm">{project.company}</p>
        </div>

        <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${project.statusColor}`}>
          {project.status}
        </div>
      </div>

      <div className="flex items-center gap-2 text-[#8f9bba] text-sm">
        <div className="w-2 h-2 bg-[#4318ff] rounded-full"></div>
        <span>In Progress</span>
      </div>
    </div>
  )
}
