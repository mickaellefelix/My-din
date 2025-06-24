import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSaidaComponent } from './lista-saida.component';

describe('ListaSaidaComponent', () => {
  let component: ListaSaidaComponent;
  let fixture: ComponentFixture<ListaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSaidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
