export interface DashboardStats {
  total_users: number;
  total_projects: number;
  total_companies: number;
  total_developers: number;

  users_by_type: Record<string, any>[];
  projects_by_status: Record<string, any>[];
  projects_by_category: Record<string, any>[];
  budget_distribution: Record<string, any>[];
  popular_tech_stacks: Record<string, any>[];
  new_users_timeline: Record<string, any>[];
  new_projects_timeline: Record<string, any>[];
  recent_activities: Record<string, any>[];
  companies_by_size: Record<string, any>[];
  companies_by_type: Record<string, any>[];

  total_project_value: number;
  average_project_value: number;
  growth_rate_users: number;
  growth_rate_projects: number;
  active_projects_count: number;
  pending_projects_count: number;
  completed_projects_count: number;

  generated_at: string;
}
