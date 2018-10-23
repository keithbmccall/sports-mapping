import { NFL as nfl } from "./nfl-teams";
import { NBA as nba } from './nba-teams'

export const League = {};

//
export const createLeague = function (league) {
  let leagueObj = {
    ID: 0,
    ROUTE: "",
    NAME: "",
    CONFERENCES: [],
    DIVISIONS: [],
    TEAMS: []
  };
  //
  leagueObj.ID = league.id;
  leagueObj.NAME = league.name;
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
  League[league.name] = leagueObj;
};

createLeague(nfl);
createLeague(nba);
