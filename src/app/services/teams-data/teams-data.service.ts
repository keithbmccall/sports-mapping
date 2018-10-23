import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {League} from '../../data/teams-reducer.js';
import {Team, Division, Conference} from '../../data/team-data';

@Injectable({
  providedIn: 'root'
})
export class TeamsDataService {
  leagueId = 1;
  leagueName: string = this.leagueId === 1 ? League.NFL.NAME : League.NBA.NAME;
  leagueRoute: string = this.leagueId === 1 ? League.NFL.ROUTE : League.NBA.ROUTE;


  getTeams(): Observable<Team[]> {
    return of(League[this.leagueName].TEAMS);
  }

  getDivisions(): Observable<Division[]> {
    return of(League[this.leagueName].DIVISIONS);
  }

  getConferences(): Observable<Conference[]> {
    return of(League[this.leagueName].CONFERENCES);
  }

  getLeagueId(): Observable<number> {
    return of(this.leagueId);
  }

  constructor() {
  }
}
