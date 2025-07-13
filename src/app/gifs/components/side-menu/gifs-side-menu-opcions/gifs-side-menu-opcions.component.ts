import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MenuOption {
  ladeb: string;
  subLadel: string;
  router: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-opcions',
  imports: [],
  templateUrl: './gifs-side-menu-opcions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOpcionsComponent {}
