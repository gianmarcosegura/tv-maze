import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ShowsService } from 'src/app/services/shows.services';
import { Show } from 'src/app/shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  @Input() id: string | undefined = undefined;

  public subscription: Subscription | undefined = undefined;
  public show: Show | undefined = undefined;

  constructor(private service: ShowsService) {}

  ngOnInit() {
    if (this.id) {
      this.subscription = this.service
        .getShow(this.id)
        .subscribe((response: any) => (this.show = response));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
