"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/empty-state";
import { Folder, Loader2 } from "lucide-react";
import { getProjects } from "@/services/projectService";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreateProjectModal } from "@/sections/projects/create-project-modal";
import { Project } from "@/types";

export default function ProjectPage() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const projectsData = await getProjects();
      console.log(`Projects ==> ${JSON.stringify(projectsData)}`);
      setProjects(projectsData.items);
    } catch (error) {
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 border-[#e0e5f2]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#2b3674]">Projects</h3>
              <Button onClick={() => setOpen(true)}>Create Project</Button>
            </div>

            {projects && projects.length > 0 ? (
              <div className="grid grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[#e0e5f2]">
                <EmptyState
                  icon={Folder}
                  title="You have no projects"
                  description="No projects have been created"
                  actionText="Create Project"
                  onAction={() => setOpen(true)}
                />
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Create Content Content */}
      <CreateProjectModal open={open} setOpen={setOpen} />
    </div>
  );
  
}
