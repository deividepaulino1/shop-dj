import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagamentoComponent } from './forma-de-pagamento.component';

describe('FormaDePagamentoComponent', () => {
  let component: FormaDePagamentoComponent;
  let fixture: ComponentFixture<FormaDePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaDePagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
