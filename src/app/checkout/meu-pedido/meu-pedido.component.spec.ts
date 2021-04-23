import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPedidoComponent } from './meu-pedido.component';

describe('MeuPedidoComponent', () => {
  let component: MeuPedidoComponent;
  let fixture: ComponentFixture<MeuPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
