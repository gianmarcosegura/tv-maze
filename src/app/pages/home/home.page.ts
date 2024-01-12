import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowsService } from 'src/app/core/services/shows.services';
import { Show } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ShowsService]
})

export class HomePage implements OnInit, OnDestroy {

  public showsByRating: Show[] = [];
  public showsByGenre: Show[] = [];
  public genres: string[] =[];
  public subscription: Subscription | undefined;

  constructor(private service: ShowsService) {}

  ngOnInit(): void {
    this.subscription = this.service.getShows().subscribe((result) => {
      this.showsByRating = this.getShowsByRating(result as Show[]);
      this.genres = this.getShowsGenres(result as Show[]).sort();
      this.showsByGenre = this.genres.map((genre: string) => this.getShowsByGenre(result, genre))
    });
  }

  getShowsByRating = (shows: Show[]) => shows.sort((a: Show, b: Show) => b.rating.average - a.rating.average);

  getShowsGenres = (shows: Show[]) => {
    const genres: string[] = [];
    shows.forEach((el: Show) => el.genres.forEach((genre: string) => genres.push(genre)))
    return [...new Set(genres)]
  }

  getShowsByGenre = (shows: any, genre: string) =>
    shows.map((element: Show) =>
      element.genres.includes(genre) ? element : null
    ).filter(Boolean)


  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
