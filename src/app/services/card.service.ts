import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';
import { ICard } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  cards :ICard[] = [{
    cardId:1,
    cardName: 'Card 1',
    imageUrl: 'image1',
    description :'Description 1',
  },
{
  cardId:2,
  cardName: 'Card 2',
  imageUrl: 'image2',
  description :'Description 2',
},{
    cardId:3,
    cardName: 'Card 3',
    imageUrl: 'image3',
    description :'Description 3',
},{
  cardId:4,
  cardName: 'Card 4',
  imageUrl: 'image4',
  description :'Description 4',
},{
  cardId:5,
  cardName: 'Card 5',
  imageUrl: 'image5',
  description :'Description 5',
}]
getCards(){
  return this.cards
}
}
