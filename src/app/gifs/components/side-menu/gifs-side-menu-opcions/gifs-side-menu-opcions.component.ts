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
export class GifsSideMenuOpcionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      ladeb: 'Trending',
      subLadel: 'GiFS Populares',
      router: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      ladeb: 'Buscador',
      subLadel: 'Budcador Gifs',
      router: '/dashboard/search',
    },
  ];
}
