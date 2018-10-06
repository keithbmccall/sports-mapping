import { Component, OnInit, Input } from "@angular/core";
import { PanelDrawerService } from "../../../../services/panel-drawer/panel-drawer.service";
import { NflTeamsService } from "../../../../services/nfl/nfl-teams.service";
import { Division } from "../../../../data/team-data";

@Component({
  selector: "app-panel-side",
  templateUrl: "./panel-side.component.html",
  styleUrls: ["./panel-side.component.scss"]
})
export class PanelSideComponent implements OnInit {
  @Input()
  conferenceId: number;
  @Input()
  panelSide: string;

  //
  conference: any;
  divisions: Division[];

  constructor(
    public panelDrawerService: PanelDrawerService,
    public nflTeamsService: NflTeamsService
  ) {}

  ngOnInit() {
    this.getDivisions(this.conferenceId);
    this.getConference(this.conferenceId);
  }
  panelDrawerServiceTogglePanel(instruction): void {
    this.panelDrawerService.toggleDrawer(instruction + this.panelSide);
  }

  getConference(conferenceId): void {
    this.nflTeamsService
      .getConferences()
      .subscribe(
        conference =>
          (this.conference = conference.filter(
            conf => conf.id === conferenceId
          )[0])
      );
  }
  getDivisions(conferenceId): void {
    this.nflTeamsService
      .getDivisions()
      .subscribe(
        divisions =>
          (this.divisions = divisions.filter(
            divi => divi.conferenceId === conferenceId
          ))
      );
  }
}
