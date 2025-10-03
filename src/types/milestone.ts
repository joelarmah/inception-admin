export interface Milestone {
  id: string;
  project_id: string;
  title: string;
  description: string;
  amount: number;
  due_date: string;
  status: "pending" | "in_progress" | "completed" | "approved";
  created_at: string;
  updated_at: string;
}
