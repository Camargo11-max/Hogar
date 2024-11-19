import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPortafolioComponent } from './cards-portafolio.component';

describe('CardsPortafolioComponent', () => {
  let component: CardsPortafolioComponent;
  let fixture: ComponentFixture<CardsPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsPortafolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
