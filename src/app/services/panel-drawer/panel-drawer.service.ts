import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelDrawerService {
  drawerOpen: boolean = false;


  toggleDrawers(): void {
    this.drawerOpen = !this.drawerOpen;
  }
}
