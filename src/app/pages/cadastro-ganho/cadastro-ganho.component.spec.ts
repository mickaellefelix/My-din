import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGanhoComponent } from './cadastro-ganho.component';

describe('CadastroGanhoComponent', () => {
  let component: CadastroGanhoComponent;
  let fixture: ComponentFixture<CadastroGanhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroGanhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroGanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
