"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { EmptyState } from "@/components/empty-state";
import {
  Folder,
  Loader,
  Loader2,
} from "lucide-react";
import { getProjects } from "@/services/projectService";

export default function ProjectPage() {

  // const projectsData = [
  //   {
  //     id: 1,
  //     title: "Abstract Colors",
  //     company: "Esthera Jackson",
  //     status: "0.91 ETH",
  //     statusColor: "project-gradient-1",
  //   },
  //   {
  //     id: 2,
  //     title: "ETH AI Brain",
  //     company: "Nick Wilson",
  //     status: "2.82 ETH",
  //     statusColor: "project-gradient-2",
  //   },
  //   {
  //     id: 3,
  //     title: "Mesh Gradients",
  //     company: "Will Smith",
  //     status: "0.56 ETH",
  //     statusColor: "project-gradient-3",
  //   },
  // ];

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
   }, []);

   const fetchProjects = async () => {
    try {
      const projectsData = await getProjects();
      setProjects(projectsData);
    } catch (error) {
      setProjects([]);
    } finally {
      setLoading(false);
    };
   }

   if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-[#2b3674]">Projects</h3>
        <div className="flex gap-4">
          <button className="text-[#4318ff] font-medium text-sm">Active</button>
          <button className="text-[#8f9bba] font-medium text-sm">Past</button>
        </div>
      </div>
      {projects.length > 0 ? (
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
            onAction={() => console.log("Create project")}
          />
        </div>
      )}
    </div>

    // <div className="min-h-screen bg-[#f4f7fe]">
    //   <Sidebar />

    //   <div className="ml-64 p-6">
    //     <div className="flex items-center justify-between mb-8">
    //       <div className="flex items-center gap-4">
    //         <h1 className="text-2xl font-bold text-[#2b3674]">Projects</h1>
    //         <Button
    //           onClick={() => setShowPopulatedData(!showPopulatedData)}
    //           variant="outline"
    //           size="sm"
    //           className="text-[#4318ff] border-[#4318ff]"
    //         >
    //           {showPopulatedData ? "Show Empty State" : "Show Data"}
    //         </Button>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <Button variant="ghost" size="icon" className="text-[#8f9bba]">
    //           <Bell className="w-5 h-5" />
    //         </Button>
    //         <div className="w-10 h-10 bg-[#4318ff] rounded-full flex items-center justify-center">
    //           <User className="w-5 h-5 text-white" />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-12 gap-6">
    //       <div className="col-span-8">

    //         <div className="grid grid-cols-3 gap-6 mb-8">
    //           <StatsCard title="Earnings" value="€350.4" icon={TrendingUp} iconBg="bg-[#4318ff]" />
    //           <StatsCard
    //             title="New Tasks"
    //             value="154"
    //             subtitle="+23% since last month"
    //             icon={CheckCircle}
    //             iconBg="bg-[#4318ff]"
    //           />
    //           <StatsCard title="Total Projects" value="2" icon={FolderOpen} iconBg="bg-[#4318ff]" />
    //         </div>

    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
}
