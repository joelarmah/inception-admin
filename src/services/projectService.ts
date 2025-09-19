import { apiClient } from "@/lib/apiClient";

export async function createProject(data: any) {
  return apiClient<{}>(`/projects`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getProjects() {
  return apiClient<[]>(`/projects/`, {
    method: "GET",
  });
}
