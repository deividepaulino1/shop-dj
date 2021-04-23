import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dadosEntregaComponent } from './dados-entrega.component';

describe('dadosEntregaComponent', () => {
  let component: dadosEntregaComponent;
  let fixture: ComponentFixture<dadosEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dadosEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dadosEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
