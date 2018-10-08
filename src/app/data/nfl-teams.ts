import { Team, Division, Conference, league } from "./team-data";

const allDivisions = [],
  allTeams = league.conferences.reduce((a, c) => {
    allDivisions.push(...c.divisions);
    c.divisions.forEach(divi => {
      divi.conferenceId = c.id;
      divi.teams.forEach(team => (team.divisionId = divi.id));
      a.push(...divi.teams);
    });
    return a;
  }, []);
//
const CONFERENCES: Conference[] = league.conferences,
  DIVISIONS: Division[] = allDivisions,
  TEAMS: Team[] = allTeams;

export const NFL = {
  CONFERENCES,
  DIVISIONS,
  TEAMS
};
