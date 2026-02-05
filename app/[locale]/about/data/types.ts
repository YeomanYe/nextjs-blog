// Personal information types
export interface PersonalInfo {
  name: string;
  initials: string;
  title: string;
  bio: string[];
  socialLinks: {
    name: string;
    url: string;
  }[];
}

// Skills types
export interface Skill {
  name: string;
  level: number;
}

// Work experience types
export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

// Education types
export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}
