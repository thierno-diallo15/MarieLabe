import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
    path: 'demandes', component: CardListComponent
  },
  {
    path: '' , component : CarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
