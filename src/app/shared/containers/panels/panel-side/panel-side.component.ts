import { Component, OnInit, Input } from "@angular/core";
import { PanelDrawerService } from "../../../../services/panel-drawer/panel-drawer.service";
import { TeamsDataService } from "../../../../services/teams-data/teams-data.service";
import { Division, Conference } from "../../../../data/team-data";

@Component({
  selector: "app-panel-side",
  templateUrl: "./panel-side.component.html",
  styleUrls: ["./panel-side.component.scss"]
})
export class PanelSideComponent implements OnInit {
  @Input()
  conference: Conference;
  @Input()
  panelSide: string;

  //
  divisions: Division[];

  constructor(
    public panelDrawerService: PanelDrawerService,
    public teamsDataService: TeamsDataService
  ) {}

  ngOnInit() {
    this.getDivisions(this.conference.id);
  }
  panelDrawerServiceTogglePanel(instruction): void {
    this.panelDrawerService.toggleDrawer(instruction + this.panelSide);
  }

  getDivisions(conferenceId): void {
    this.teamsDataService
      .getDivisions()
      .subscribe(
        divisions =>
          (this.divisions = divisions.filter(
            divi => divi.conferenceId === conferenceId
          ))
      );
  }
}
