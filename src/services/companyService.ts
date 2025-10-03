import { apiClient } from "@/lib/apiClient";
import { Company, PagedResponse } from "@/types";

export async function createCompany(data: any) {
  return apiClient<{}>(`/companies/company`, {
    method: "POST",
    body: data,
  });
}

export async function updateCompany(companyId: string, data: any) {
  return apiClient<{}>(`/companies/company/${companyId}`, {
    method: "PUT",
    body: data,
  });
}

export async function fetchCompanies() {
  return apiClient<PagedResponse<Company, "companies">>(`/companies/companies`, {
    method: "GET",
  });
}
 