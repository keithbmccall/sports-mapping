import { Component, OnInit } from "@angular/core";
import { NflTeamsService } from "../../../services/nfl/nfl-teams.service";
import { Conference } from "../../../data/team-data";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  conferences: Conference[];

  constructor(public nflTeamsService: NflTeamsService) {}

  ngOnInit() {
    this.getConferences();
  }
  getConferences(): void {
    this.nflTeamsService
      .getConferences()
      .subscribe(conference => (this.conferences = conference));
  }
}
