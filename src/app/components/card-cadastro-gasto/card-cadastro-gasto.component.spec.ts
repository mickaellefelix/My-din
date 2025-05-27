import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroGastoComponent } from './card-cadastro-gasto.component';

describe('CardCadastroGastoComponent', () => {
  let component: CardCadastroGastoComponent;
  let fixture: ComponentFixture<CardCadastroGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCadastroGastoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
