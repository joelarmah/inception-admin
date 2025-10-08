import { apiClient } from "@/lib/apiClient";
import { Company, PagedResponse } from "@/types";

export async function createCompany(company: Company) {
  return apiClient<unknown>(`/companies/company`, {
    method: "POST",
    body: company,
  });
}

export async function updateCompany(companyId: string, company: Company) {
  return apiClient<unknown>(`/companies/company/${companyId}`, {
    method: "PUT",
    body: company,
  });
}

export async function fetchCompanies() {
  return apiClient<PagedResponse<Company, "companies">>(`/companies/companies`, {
    method: "GET",
  });
}
 