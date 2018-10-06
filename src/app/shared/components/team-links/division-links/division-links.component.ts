import { Component, OnInit, Input } from "@angular/core";
import { NflTeamsService } from "../../../../services/nfl/nfl-teams.service";
import { Division } from "../../../../data/team-data";

@Component({
  selector: "app-division-links",
  templateUrl: "./division-links.component.html",
  styleUrls: ["./division-links.component.scss"]
})
export class DivisionLinksComponent implements OnInit {
  @Input()
  conferenceId;

  divisions: Division[];

  constructor(public nflTeamsService: NflTeamsService) {}

  ngOnInit() {
    this.getDivisions(this.conferenceId);
  }
  getDivisions(conferenceId): void {
    this.nflTeamsService.getDivisions().subscribe(divisions => {
      this.divisions = divisions.filter(
        divi => divi.conferenceId === conferenceId
      );
    });
  }
}
