import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowsService } from 'src/app/services/shows.services';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit, OnDestroy {
  @Input() id: string | undefined = undefined;

  public subscription: Subscription | undefined = undefined;
  public episodes: never[] = [];
  public displayedColumns: string[] = ['position', 'name', 'season', 'rating'];

  constructor(private service: ShowsService) {}

  ngOnInit() {
    if (this.id) {
      this.subscription = this.service
        .getShowEpisodes(this.id)
        .subscribe((response: any) => {
          this.episodes = response.map((res: any) => ({
            position: res.number,
            name: res.name,
            season: res.season,
            rating: res.rating.average,
            url: res.url,
          }));
        });
    }
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
