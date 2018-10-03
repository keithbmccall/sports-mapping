import { Component, OnInit } from '@angular/core';
import {PanelDrawerService} from '../../../services/panel-drawer/panel-drawer.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public panelDrawerService: PanelDrawerService) { }

  ngOnInit() {
  }

}
