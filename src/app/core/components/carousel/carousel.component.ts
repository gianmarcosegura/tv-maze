import { Component, Input, OnInit } from '@angular/core';
import { Show } from 'src/app/shared/models';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent  implements OnInit {

  @Input() shows: Show[] = [];
  @Input() index: number | undefined;

  public generateId: string = '';

  constructor() { }

  ngOnInit() {
    this.generateId = `carousel-${this.index}`
  }

  onSlide = (direction: string) => {
    let container = document.querySelector(`#${this.generateId}`);
    if(container) {
			container.scrollTo({
				left:container.scrollLeft - (direction === 'left' ? + 800 : - 800),
				top: 0,
				behavior: "smooth"
			});
    }
  }

}
