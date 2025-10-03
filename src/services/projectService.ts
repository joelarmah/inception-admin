import { apiClient } from "@/lib/apiClient";
import { PagedResponse, Project } from "@/types";

export async function createProject(data: any) {
  return apiClient<{}>(`/projects`, {
    method: "POST",
    body:data,
  });
}

export async function updateProject(projectId: string, data: any) {
  return apiClient<{}>(`/projects/${projectId}`, {
    method: "PUT",
    body: data,
  });
}


export async function getProjects() {
  return apiClient<PagedResponse<Project>>(`/projects/`, {
    method: "GET",
  });
}
