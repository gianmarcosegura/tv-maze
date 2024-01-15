import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShowsService } from 'src/app/core/services/shows.services';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit, OnDestroy {
  @Input() id: string | undefined = undefined;

  public subscription: Subscription | undefined = undefined;
  public crew: never[] = [];

  constructor(private service: ShowsService) {}

  ngOnInit() {
    if (this.id) {
      this.subscription = this.service
        .getShowCrew(this.id)
        .subscribe((response: any) => (this.crew = response));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
