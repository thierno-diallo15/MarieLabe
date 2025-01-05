import { Component } from '@angular/core';
import { ICard } from '../models/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  cards: ICard[] = []; // Array of cards
constructor(private cardService :  CardService) { }

ngOnInit() {
  this.cards = this.cardService.getCards(); // Get cards from service
  console.log(this.cards);
  }
  
}
