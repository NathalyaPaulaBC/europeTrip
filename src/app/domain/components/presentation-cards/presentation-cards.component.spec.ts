import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCardsComponent } from './presentation-cards.component';

describe('PresentationCardsComponent', () => {
  let component: PresentationCardsComponent;
  let fixture: ComponentFixture<PresentationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
