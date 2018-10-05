import { Component, OnInit } from "@angular/core";
import { NflTeamsService } from "../../../services/nfl/nfl-teams.service";
import { Team, Division, Conference } from "../../../data/team-data";

@Component({
  selector: "app-teams-links",
  templateUrl: "./teams-links.component.html",
  styleUrls: ["./teams-links.component.scss"]
})
export class TeamsLinksComponent implements OnInit {
  teams: Team[];
  divisions: Division[];
  conferences: Conference[];

  constructor(private nflTeamsService: NflTeamsService) {}

  ngOnInit() {
    this.getTeams();
    this.getDivisions();
    this.getConferences();
  }
  getTeams(): void {
    this.nflTeamsService.getTeams().subscribe(teams => (this.teams = teams));
  }
}
