import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTipoComponent } from './card-tipo.component';

describe('CardTipoComponent', () => {
  let component: CardTipoComponent;
  let fixture: ComponentFixture<CardTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTipoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
