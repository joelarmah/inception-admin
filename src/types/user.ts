export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: UserType;
  profile_image_url: string;
  is_admin: boolean;
  username: string;
  created_at: string;
  updated_at: string;
}

export type UserType = 
  | 'client' 
  | 'developer' 
  | 'engineering_manager' 
  | 'delivery_manager' 
  | 'tech_lead' 
  | 'qa_lead' 
  | 'admin';