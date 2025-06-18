export interface Me {
  name: string;
  lastName: string;
  role: string;
  portfolioLink: string;
  avatarSource: string;
  gitHubLink: string;
  linkedInLink: string;
}

export interface Work {
  workName: string;
  workDescription: string;
  workTechnologies: string[];
  workImageSource: string;
  codeButtonLink: string;
  demoButtonLink: string;
}

export interface Education {
  degree: string;
  college: string;
  date: string;
  competencies: string[];
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  responsabilities: string[];
}

export interface PortfolioData {
  me: Me;
  works: Work[];
  education: Education[];
  experience: Experience[];
}
