import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MapComponent } from "./shared/components/map/map.component";
import { LayoutComponent } from "./shared/containers/layout/layout.component";
import { TeamLinksComponent } from './shared/components/team-links/team-links/team-links.component';
import { DivisionLinksComponent } from './shared/components/team-links/division-links/division-links.component';
import { ConferenceLinksComponent } from './shared/components/team-links/conference-links/conference-links.component';
import { PanelSideComponent } from './shared/containers/panels/panel-side/panel-side.component';
import { PanelCenterComponent } from './shared/containers/panels/panel-center/panel-center.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LayoutComponent,
    TeamLinksComponent,
    DivisionLinksComponent,
    ConferenceLinksComponent,
    PanelSideComponent,
    PanelCenterComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
