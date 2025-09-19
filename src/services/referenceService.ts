import { apiClient } from "@lib/apiClient";

export async function fetchReference(key: string) {
  return apiClient<{}>(`/admin/reference/${key}`, {
    method: "GET",
  });
}

export async function createReference(key: string, referenceData: any) {
  return apiClient<{}>(`/admin/reference/${key}`, {
    method: "POST",
    body: JSON.stringify(referenceData),
  });
}
