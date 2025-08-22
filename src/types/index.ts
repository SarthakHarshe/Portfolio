export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image?: string;
  link: string;
  featured?: boolean;
}

export interface PhotoItem {
  id: number;
  title: string;
  category: 'architecture' | 'portrait' | 'abstract' | 'nature';
  year: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide';
}

export interface Skill {
  id: number;
  name: string;
  description: string;
  icon?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  index?: string;
}


