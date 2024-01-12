import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowsService } from 'src/app/core/services/shows.services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ShowsService]
})

export class HomePage implements OnInit, OnDestroy {

  public showsByRating = [];
  public showsByGenre: any[] = [];
  public genres: string[] =[];
  public subscription: Subscription | undefined;

  constructor(private service: ShowsService) {}

  ngOnInit(): void {
    this.subscription = this.service.getShows().subscribe((result: any) => {
      this.showsByRating = this.getShowsByRating(result);
      this.genres = this.getShowsGenres(result).sort();
      this.showsByGenre = this.genres.map((genre: string) => this.getShowsByGenre(result, genre))
    });
  }

  getShowsByRating = (shows: any) => shows.sort((a: any, b: any) => b.rating.average - a.rating.average);

  getShowsGenres = (shows: any) => {
    const genres: string[] = [];
    shows.forEach((el: any) => el.genres.forEach((elo: never) => genres.push(elo)))
    return [...new Set(genres)]
  }

  getShowsByGenre = (shows: any, genre: string) =>
    shows.map((element: any) =>
      element.genres.includes(genre) ? element : null
    ).filter(Boolean)


  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
