import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-division-links",
  templateUrl: "./division-links.component.html",
  styleUrls: ["./division-links.component.scss"]
})
export class DivisionLinksComponent implements OnInit {
  @Input()
  conference;
  @Input()
  divisions;

  constructor() {}

  ngOnInit() {}
}
