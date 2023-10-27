import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarriageComponent } from './card-marriage.component';

describe('CardMarriageComponent', () => {
  let component: CardMarriageComponent;
  let fixture: ComponentFixture<CardMarriageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMarriageComponent]
    });
    fixture = TestBed.createComponent(CardMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
