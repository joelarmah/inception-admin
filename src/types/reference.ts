export interface ReferenceData {
  id: number;
  name: string;
  description?: string;
  is_active: boolean;
}

export interface CompanySize extends ReferenceData {
  employee_range?: string;
}

export interface BusinessType extends ReferenceData {
  category?: string;
}

export interface TechStack extends ReferenceData {
  category?: string;
  popularity_score?: number;
}
