import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyRsponse } from '../interfaces/giphy-interfaces';
import { Gig } from '../interfaces/gif.interface';
import { GitMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const loadFronmLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage)
  console.log(gifs);
  return gifs

};

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gig[]>([]);
  trndingGifsLoading = signal(true);

  searchHistory = signal(<Record<string, Gig[]>>(loadFronmLocalStorage()));
  searchHisoryKey = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  seveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  });

  loadTrendingGifs() {
    this.http
      .get<GiphyRsponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GitMapper.mapGiphItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trndingGifsLoading.set(false);
        // console.log({ gifs });
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyRsponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((item) => GitMapper.mapGiphItemsToGifArray(item)),
        tap((items) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLocaleLowerCase()]: items,
          }));
        })
      );
  }
  getHistoryGifs(query: string): Gig[] {
    return this.searchHistory()[query] ?? [];
  }

  // gifsByKey;
}
