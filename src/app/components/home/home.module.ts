import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { HomeComponentRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeComponentRoutingModule,
    HttpClientModule,
  ],
  declarations: [HomeComponent, CarouselComponent],
})
export class HomeComponentModule {}
