
export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  purpose: string;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}