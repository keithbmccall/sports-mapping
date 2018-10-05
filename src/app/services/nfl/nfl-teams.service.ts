import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TEAMS, DIVISIONS, CONFERENCES } from "../../data/nfl-teams";
import { Team, Division, Conference } from "../../data/team-data";

@Injectable({
  providedIn: "root"
})
export class NflTeamsService {
  getTeams(): Observable<Team[]> {
    return of(TEAMS);
  }
  getDivisions(): Division[] {
    return DIVISIONS;
  }
  getConferences(): Conference[] {
    return CONFERENCES;
  }

  constructor() {}
}
