import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAutenticadoComponent } from './usuario-autenticado.component';

describe('UsuarioAutenticadoComponent', () => {
  let component: UsuarioAutenticadoComponent;
  let fixture: ComponentFixture<UsuarioAutenticadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAutenticadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAutenticadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
