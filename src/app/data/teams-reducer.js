import { NFL as nfl } from "./nfl-teams";

export const League = {};
//
function createLeague(league) {
  let leagueObj = {
    ID: 0,
    ROUTE: "",
    CONFERENCES: [],
    DIVISIONS: [],
    TEAMS: []
  };
  //
  leagueObj.ID = league.id;
  leagueObj.ROUTE = `${league.name.toLowerCase()}/`;
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

  //
  League[league.name] = leagueObj;
}
createLeague(nfl);
