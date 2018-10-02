import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { MapComponent } from './shared/components/map/map.component';
import { LayoutComponent } from './shared/containers/layout/layout.component';
import { LeftPanelComponent } from './shared/containers/left-panel/left-panel.component';
import { RightPanelComponent } from './shared/containers/right-panel/right-panel.component';
import { CentralPanelComponent } from './shared/containers/central-panel/central-panel.component';
import { PanelRightComponent } from './shared/containers/panel-right/panel-right.component';
import { PanelLeftComponent } from './shared/containers/panel-left/panel-left.component';
import { PanelMainComponent } from './shared/containers/panel-main/panel-main.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LayoutComponent,
    PanelRightComponent,
    PanelLeftComponent,
    PanelMainComponent


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
