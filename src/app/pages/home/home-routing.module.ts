import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ShowComponent } from '../show/show.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'show/:id',
    component: ShowComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
