"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Star,
  DollarSign,
  Github,
  Globe,
  Briefcase,
  UsersIcon,
} from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { getDevelopers, getDeveloperById } from "@/services/developerService";
import { CreateSquadModal } from "@/sections/squad/create-company-modal";
import { DeveloperProfile } from "@/types";

export default function SquadPage() {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [developers, setDevelopers] = useState<DeveloperProfile[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedTechStacks, setSelectedTechStacks] = useState<string[]>([]);
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [techStacks, setTechStacks] = useState<any[]>([]);

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const fetchDevelopers = async () => {
    setLoading(true);
    try {
      const developersData = await getDevelopers();
      setDevelopers(developersData.items);
      console.log(`Squad ==> ${JSON.stringify(developersData)}`);
    } catch (error) {
      setDevelopers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 border-[#e0e5f2]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#2b3674]">Squad</h3>
              <Button onClick={() => setOpen(true)}>Create Squad</Button>
            </div>

            {developers.length > 0 ? (
              <div className="grid grid-cols-3 gap-6">
                {developers.map((developer, index) => (
                  <div
                    key={developer.id}
                    className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-black/40 transition-all"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {developer.first_name} {developer.last_name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {developer.role_name || "Developer"}
                        </p>
                      </div>
                   
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {developer.bio || "No bio available"}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Experience</p>
                        <span className="text-white font-medium">
                          {developer.years_of_experience || 0} years
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">
                          Hourly Rate
                        </p>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-white font-medium">
                            {developer.hourly_rate || "Negotiable"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Rating</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">
                            {developer.rating || "5.0"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs mb-1">Projects</p>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-medium">
                            {developer.completed_projects || 0}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {developer.tech_stacks
                          ?.slice(0, 4)
                          .map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-purple-500/20 border border-purple-500/40 rounded text-xs text-purple-300"
                            >
                              {tech.name}
                            </span>
                          ))}
                        {developer.tech_stacks &&
                          developer.tech_stacks.length > 4 && (
                            <span className="px-2 py-1 text-xs text-gray-400">
                              +{developer.tech_stacks.length - 4}
                            </span>
                          )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex gap-3">
                        {developer.github_username && (
                          <a
                            href={`https://github.com/${developer.github_username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {developer.portfolio_url && (
                          <a
                            href={developer.portfolio_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Globe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <button
                        onClick={() =>
                          router.push(`/client/developers/${developer.id}`)
                        }
                        className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-[#e0e5f2]">
                <EmptyState
                  icon={UsersIcon}
                  title="You have no squad"
                  description="No squad have been created"
                  actionText="Create Squad"
                  // onAction={() => setOpen(true)}
                />
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Create Content Content */}
      <CreateSquadModal open={open} setOpen={setOpen} />
    </div>
  );
}
