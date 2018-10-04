import {Component, OnInit} from '@angular/core';
import {PanelDrawerService} from '../../../services/panel-drawer/panel-drawer.service';

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.scss']
})
export class PanelLeftComponent implements OnInit {
  conference = {
    title: '',
    divisions: []
  };

  constructor(public panelDrawerService: PanelDrawerService) {
  }

  ngOnInit() {
  }

}
