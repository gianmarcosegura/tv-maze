import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { ShowsService } from 'src/app/core/services/shows.services';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from 'src/app/core/components/carousel/carousel.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    // ShowsService
  ],
  declarations: [HomePage, HeaderComponent, CarouselComponent]
})
export class HomePageModule {}
