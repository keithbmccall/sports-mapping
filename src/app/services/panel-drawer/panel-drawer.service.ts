import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelDrawerService {
  leftDrawerOpen: boolean = false;
  rightDrawerOpen: boolean = false;


  toggleDrawer(option: string): void {
    if (option === 'right' || option === 'left') {
      this[`${option}DrawerOpen`] = true;
    } else if (option === 'close-right' || option === 'close-left') {
      this[`${option.slice(6)}DrawerOpen`] = false;
    } else {
      console.log(`error: ${option} is not a legit param`);
    }
  }
}
