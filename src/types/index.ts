export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  image: string;
  nationality: string;
  age: number;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  category: 'transfer' | 'match' | 'club' | 'interview';
}

export interface Match {
  id: number;
  competition: string;
  opponent: string;
  date: string;
  time: string;
  venue: string;
  isHome: boolean;
  score?: {
    home: number;
    away: number;
  };
}

export interface SocialPost {
  id: number;
  platform: 'instagram' | 'twitter' | 'telegram';
  content: string;
  image?: string;
  link: string;
  date: string;
}