import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ShowComponent } from './show.component';
import { ShowComponentRoutingModule } from './show-routing.module';
import { MatChipsModule } from '@angular/material/chips';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MainComponent } from './main/main.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { CastComponent } from './cast/cast.component';
import { CrewComponent } from './crew/crew.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    HttpClientModule,
    ShowComponentRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
  ],
  declarations: [
    ShowComponent,
    MainComponent,
    EpisodesComponent,
    CastComponent,
    CrewComponent,
  ],
})
export class ShowComponentModule {}
