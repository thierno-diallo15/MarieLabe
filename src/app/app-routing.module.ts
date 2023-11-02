import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardBirthComponent } from './card-birth/card-birth.component';
import { CardListComponent } from './card-list/card-list.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {
    path: 'demandes', component: CardListComponent
  },
  {
    path : 'birth', component: CardBirthComponent
  },
  {
    path : "**" , component: CarouselComponent
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
