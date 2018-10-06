import { Team, Division, Conference, league } from "./team-data";

let allDivisions = [],
  allTeams = league.conferences.reduce((a, c) => {
    allDivisions.push(...c.divisions);
    c.divisions.forEach(divi => {
      divi.conferenceId = c.id;
      divi.teams.forEach(team => (team.divisionId = divi.id));
      a.push(...divi.teams);
    });
    return a;
  }, []);

export const CONFERENCES: Conference[] = league.conferences;
export const DIVISIONS: Division[] = allDivisions;
export const TEAMS: Team[] = allTeams;
