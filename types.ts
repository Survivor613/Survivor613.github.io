export interface Link {
  name: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  title: string;
  institution: string;
  email: string;
  location: string;
  avatarUrl: string;
  bio: string;
  interests: string[];
  socialLinks: Link[];
}

export interface News {
  id: string;
  date: string;
  content: string; // Markdown supported
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  thumbnail?: string; // URL
  links: Link[];
  highlight?: boolean;
  abstract?: string;
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}