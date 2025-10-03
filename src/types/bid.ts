export interface Bid {
    id: string;
    project_id: string;
    developer_id: string;
    proposed_rate: number;
    estimated_duration: string;
    cover_letter: string;
    status: 'pending' | 'accepted' | 'rejected';
    created_at: string;
    updated_at: string;
  }