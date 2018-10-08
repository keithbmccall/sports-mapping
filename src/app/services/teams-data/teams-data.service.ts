import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { League } from "../../data/teams-reducer";
import { Team, Division, Conference } from "../../data/team-data";

@Injectable({
  providedIn: "root"
})
export class TeamsDataService {
  league: number = 1;

  getTeams(): Observable<Team[]> {
    return this.league === 1 && of(League.NFL.TEAMS);
  }
  getDivisions(): Observable<Division[]> {
    return this.league === 1 && of(League.NFL.DIVISIONS);
  }
  getConferences(): Observable<Conference[]> {
    return this.league === 1 && of(League.NFL.CONFERENCES);
  }

  constructor() {}
}
