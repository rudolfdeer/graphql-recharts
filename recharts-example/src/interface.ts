export interface User {
  id: string;
  login: string;
  name: string;
  email: string;
  avatarUrl: string;
  location: string;
  bio: string;
  createdAt: Date;
  contributionsCollection: ContributionsCollection;
  __typename: string;
}
interface ContributionDay {
  weekday: number;
  date: string;
  contributionCount: number;
  color: string;
  __typename: string;
}

interface Week {
  contributionDays: ContributionDay[];
  __typename: string;
}

interface Month {
  name: string;
  year: number;
  firstDay: string;
  totalWeeks: number;
  __typename: string;
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: Week[];
  months: Month[];
  __typename: string;
}

export interface ContributionsCollection {
  contributionCalendar: ContributionCalendar;
  __typename: string;
}

