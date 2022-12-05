export interface IBenefit {
  title: string;
  description: string;
}

export type Benefits = IBenefit[];

export type TeamMembersData = {
  name: string;
  role: string;
  githubNickname: string;
  githubLink: string;
  linkedinLink: string;
}[];
