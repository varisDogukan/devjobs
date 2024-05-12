export interface JobType {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export interface CardType {
  postedAt: string;
  contract: string;
  company: string;
  position: string;
  location: string;
  logo: string;
}

export interface FormType {
  search: string;
  location: string;
  fullTimeOnly: boolean;
}
