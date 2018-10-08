import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { League } from "../../data/teams-reducer.js";
import { Team, Division, Conference } from "../../data/team-data";

@Injectable({
  providedIn: "root"
})
export class TeamsDataService {
  leagueId: number = 1;

  getTeams(): Observable<Team[]> {
    return this.leagueId === 1 && of(League.NFL.TEAMS);
  }
  getDivisions(): Observable<Division[]> {
    return this.leagueId === 1 && of(League.NFL.DIVISIONS);
  }
  getConferences(): Observable<Conference[]> {
    return this.leagueId === 1 && of(League.NFL.CONFERENCES);
  }

  constructor() {}
}
