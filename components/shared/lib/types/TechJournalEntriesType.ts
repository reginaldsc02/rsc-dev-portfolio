export interface TechJournalEntriesType {
  slug: string | null;
  id: number;
  title: string;
  author: string;
  summary: string;
  featured: boolean | null;
  created_at: Date | null;
  updated_at: Date | null;
}
