import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private http = inject(HttpClient);
  private url = 'https://api.tvmaze.com/shows';
  private searchUrl = 'https://api.tvmaze.com/search/shows';

  getShows = () => this.http.get(this.url);
  getShow = (id: string) => {
    return this.http.get(`${this.url}/${id}`);
  };
  getShowEpisodes = (id: string) => {
    return this.http.get(`${this.url}/${id}/episodes`);
  };
  getShowCast = (id: string) => {
    return this.http.get(`${this.url}/${id}/cast`);
  };
  getShowCrew = (id: string) => {
    return this.http.get(`${this.url}/${id}/crew`);
  };
  getShowsBySearch = (text: string) => {
    const params = new HttpParams({ fromString: `q=${text}` });
    return this.http.get(this.searchUrl, { params });
  };
}
