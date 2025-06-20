import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTransacaoComponent } from './detalhes-transacao.component';

describe('DetalhesTransacaoComponent', () => {
  let component: DetalhesTransacaoComponent;
  let fixture: ComponentFixture<DetalhesTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesTransacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
