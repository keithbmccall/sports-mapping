import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list-links",
  templateUrl: "./list-links.component.html",
  styleUrls: ["./list-links.component.scss"]
})
export class ListLinksComponent implements OnInit {
  @Input()
  listItems;
  constructor() {}

  ngOnInit() {}
}
