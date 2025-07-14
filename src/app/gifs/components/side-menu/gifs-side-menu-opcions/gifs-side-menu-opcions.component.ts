import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  ladeb: string;
  subLadel: string;
  router: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-opcions',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-opcions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOpcionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-circle-user',
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
