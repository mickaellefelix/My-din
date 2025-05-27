import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCadastroGanhoComponent } from './card-cadastro-ganho.component';

describe('CardCadastroGanhoComponent', () => {
  let component: CardCadastroGanhoComponent;
  let fixture: ComponentFixture<CardCadastroGanhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCadastroGanhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCadastroGanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
