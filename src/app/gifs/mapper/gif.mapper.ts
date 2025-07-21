import { Gig } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy-interfaces';

export class GitMapper {
  static mapGiphyItemTogif(item: GiphyItem): Gig {
    return {
      id: item.id,
      title: item.title, // corregido aquí
      url: item.images.original.url,
    };
  }

  static mapGiphItemsToGifArray(items: GiphyItem[]): Gig[] {
    return items.map(this.mapGiphyItemTogif) // corregido aquí
  }
}
