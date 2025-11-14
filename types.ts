export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface PortfolioCategory {
  title: string;
  projects: Project[];
}
