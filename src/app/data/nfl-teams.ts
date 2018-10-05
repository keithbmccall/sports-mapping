import { Team, Division, Conference, league } from "./team-data";

export const TEAMS: Team[] = [];
export const DIVISIONS: Division[] = league.conferences.map(
  conference => conference.divisions
);

export const CONFERENCES: Conference[] = league.conferences;
