import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./shared/containers/layout/layout.component";
import { PanelSideComponent } from "./shared/containers/panels/panel-side/panel-side.component";
import { PanelCenterComponent } from "./shared/containers/panels/panel-center/panel-center.component";
import { PanelOptionsComponent } from "./shared/containers/panels/panel-options/panel-options.component";
import { ListLinksComponent } from "./shared/components/tools/lists/list-links/list-links.component";
import { MapComponent } from "./shared/components/maps/map/map.component";
import { RemoveWhiteSpacePipe } from './pipes/remove-white-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PanelSideComponent,
    PanelCenterComponent,
    PanelOptionsComponent,
    ListLinksComponent,
    MapComponent,
    RemoveWhiteSpacePipe
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
