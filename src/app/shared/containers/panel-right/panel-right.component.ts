import { Component, OnInit } from '@angular/core';
import {PanelDrawerService} from '../../../services/panel-drawer/panel-drawer.service';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.scss']
})
export class PanelRightComponent implements OnInit {

  constructor(public panelDrawerService: PanelDrawerService) { }

  ngOnInit() {
  }

}
