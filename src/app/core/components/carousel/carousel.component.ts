import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent  implements OnInit {

  @Input() data: any = [];
  @Input() index: number | undefined;

  public generateId: string = '';

  constructor() { }

  ngOnInit() {
    this.generateId = `carousel-${this.index}`
  }

  onLeft = () => {
    let container = document.querySelector(`#${this.generateId}`);
    if(container) {
			container.scrollTo({
				left:container.scrollLeft - 800,
				top: 0,
				behavior: "smooth"
			});
    }
  }

  onRight = () => {
    let container = document.querySelector(`#${this.generateId}`);
    if(container) {
      container.scrollTo({
        left:container.scrollLeft + 800,
        top: 0,
        behavior: "smooth"
      });
    }
  }

}
