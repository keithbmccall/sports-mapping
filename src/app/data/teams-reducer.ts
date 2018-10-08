import { Team, Division, Conference } from "./team-data";
import { NFL as nfl } from "./nfl-teams";

const allDivisions = [],
  allTeams = nfl.conferences.reduce((a, c) => {
    allDivisions.push(...c.divisions);
    c.divisions.forEach(divi => {
      divi.conferenceId = c.id;
      divi.teams.forEach(team => (team.divisionId = divi.id));
      a.push(...divi.teams);
    });
    return a;
  }, []);
//
const CONFERENCES: Conference[] = nfl.conferences,
  DIVISIONS: Division[] = allDivisions,
  TEAMS: Team[] = allTeams;


export const NFL = {
  CONFERENCES,
  DIVISIONS,
  TEAMS
};
export const NBA = {

}