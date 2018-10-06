import { Component, OnInit, Input } from "@angular/core";
import { PanelDrawerService } from "../../../../services/panel-drawer/panel-drawer.service";

@Component({
  selector: "app-panel-options",
  templateUrl: "./panel-options.component.html",
  styleUrls: ["./panel-options.component.scss"]
})
export class PanelOptionsComponent implements OnInit {
  @Input()
  conference: {};
  @Input()
  panelSide: string;


  constructor(public panelDrawerService: PanelDrawerService) {}

  ngOnInit() {}
}
