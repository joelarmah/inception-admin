import { apiClient } from "@/lib/apiClient";

export async function createCompany(data: any) {
  return apiClient<{}>(`/companies/company`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateCompany(companyId: string, data: any) {
  return apiClient<{}>(`/companies/company/${companyId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function fetchCompanies() {
  return apiClient<[]>(`/companies/company`, {
    method: "GET",
  });
}
