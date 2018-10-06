import { Team, Division, Conference, league } from "./team-data";

export const CONFERENCES: Conference[] = league.conferences;
export const DIVISIONS: Division[] = league.conferences.reduce((a, c) => {
  console.log(a,c)
  a.push(...c.divisions);
  return a;
}, []);
export const TEAMS: Team[] = DIVISIONS.reduce((a, c) => {
  a.push(...c.teams);
  return a;
}, []);
