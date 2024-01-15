import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from 'src/app/services/shows.services';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  public id: string | null = null;
  public showName: string | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private service: ShowsService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.service.getShow(this.id).subscribe(el => {
        this.showName = (el as any).name;
      });
    }
  }
}
