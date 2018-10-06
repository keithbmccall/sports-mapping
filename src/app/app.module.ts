import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MapComponent } from "./shared/components/map/map.component";
import { LayoutComponent } from "./shared/containers/layout/layout.component";
import { PanelRightComponent } from "./shared/containers/panel-right/panel-right.component";
import { PanelLeftComponent } from "./shared/containers/panel-left/panel-left.component";
import { PanelMainComponent } from "./shared/containers/panel-main/panel-main.component";
import { TeamLinksComponent } from './shared/components/team-links/team-links/team-links.component';
import { DivisionLinksComponent } from './shared/components/team-links/division-links/division-links.component';
import { ConferenceLinksComponent } from './shared/components/team-links/conference-links/conference-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LayoutComponent,
    PanelRightComponent,
    PanelLeftComponent,
    PanelMainComponent,
    TeamLinksComponent,
    DivisionLinksComponent,
    ConferenceLinksComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
