import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBirthComponent } from './card-birth.component';

describe('CardBirthComponent', () => {
  let component: CardBirthComponent;
  let fixture: ComponentFixture<CardBirthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBirthComponent]
    });
    fixture = TestBed.createComponent(CardBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
