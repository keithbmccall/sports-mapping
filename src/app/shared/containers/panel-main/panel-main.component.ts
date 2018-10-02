import {Component, OnInit} from '@angular/core';
import {PanelDrawerService} from '../../../services/panel-drawer/panel-drawer.service';

@Component({
  selector: 'app-panel-main',
  templateUrl: './panel-main.component.html',
  styleUrls: ['./panel-main.component.css']
})
export class PanelMainComponent implements OnInit {

  constructor(public panelDrawerService: PanelDrawerService) {
  }

  ngOnInit() {
  }

}
