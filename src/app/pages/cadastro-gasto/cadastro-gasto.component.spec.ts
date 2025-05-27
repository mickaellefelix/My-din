import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGastoComponent } from './cadastro-gasto.component';

describe('CadastroGastoComponent', () => {
  let component: CadastroGastoComponent;
  let fixture: ComponentFixture<CadastroGastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroGastoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
