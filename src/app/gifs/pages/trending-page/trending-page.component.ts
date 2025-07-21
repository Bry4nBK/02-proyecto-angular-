import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifService } from '../../services/gifs.service';
// interface GifItem {
//   url: string;
//   title: string;
// }

//

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {
  GifService = inject(GifService);
  // gifs = computed(() => this.GifService.trendingGifs());
}
