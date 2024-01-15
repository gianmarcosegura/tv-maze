import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowsService } from 'src/app/services/shows.services';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss'],
})
export class CastComponent implements OnInit, OnDestroy {
  @Input() id: string | undefined = undefined;

  public subscription: Subscription | undefined = undefined;
  public cast: any = [];

  constructor(private service: ShowsService) {}

  ngOnInit() {
    if (this.id) {
      this.subscription = this.service
        .getShowCast(this.id)
        .subscribe(response => (this.cast = response));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
