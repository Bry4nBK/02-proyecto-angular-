import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifsSideMenuHeaderComponent } from "./gifs-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuOpcionsComponent } from "./gifs-side-menu-opcions/gifs-side-menu-opcions.component";
import { GifService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOpcionsComponent],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  GifService = inject(GifService);

 }
