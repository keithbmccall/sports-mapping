import { Team, Division, Conference } from "./team-data";
import { NFL as nfl } from "./nfl-teams";

const NFL = {
    CONFERENCES: [],
    DIVISIONS: [],
    TEAMS: []
  },
  NBA = {
    CONFERENCES: [],
    DIVISIONS: [],
    TEAMS: []
  };
export const League = {
  NFL,
  NBA
};
function createLeague(league) {
  let leagueObj = {
    ID: 0,
    CONFERENCES: [],
    DIVISIONS: [],
    TEAMS: []
  };
  //
  leagueObj.ID = league.id;
  leagueObj.CONFERENCES = league.conferences;
  leagueObj.TEAMS = league.conferences.reduce((a, c) => {
    leagueObj.DIVISIONS.push(...c.divisions);
    c.divisions.forEach(divi => {
      divi.conferenceId = c.id;
      divi.teams.forEach(team => (team.divisionId = divi.id));
      a.push(...divi.teams);
    });
    return a;
  }, []);
  //
  League[league.name] = leagueObj;
}
createLeague(nfl);
