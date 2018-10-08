import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { NFL } from "../../data/nfl-teams";
import { Team, Division, Conference } from "../../data/team-data";

@Injectable({
  providedIn: "root"
})
export class TeamsDataService {
  getTeams(): Observable<Team[]> {
    return of(NFL.TEAMS);
  }
  getDivisions(): Observable<Division[]> {
    return of(NFL.DIVISIONS);
  }
  getConferences(): Observable<Conference[]> {
    return of(NFL.CONFERENCES);
  }

  constructor() {}
}
