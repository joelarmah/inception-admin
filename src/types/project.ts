export interface Project {
  id: string;
  title: string;
  code_name: string;
  description: string;
  status: string;
  category?: string;
  scope?: string;
  experience_level?: string;
  budget_type: string;
  budget_amount?: number;
  budget_currency?: string;
  hourly_rate_min?: number;
  hourly_rate_max?: number;
  tech_stack?: string[];
  project_types?: string[];
  client_id: string;
  company_id?: number;
  attachments?: string[];
  is_featured: boolean;
  is_urgent: boolean;
  visibility: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  deadline?: string;
  bid_count?: number;
}
