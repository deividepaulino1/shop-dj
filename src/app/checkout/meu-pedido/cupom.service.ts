import { Usuario1 } from 'src/assets/models/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'
import { CupomModel } from './cupom';


@Injectable({
  providedIn: 'root'
})
export class CupomService {

  private cupomFunciona: boolean = false;

  cupomHabilitado = new EventEmitter<boolean>();
  
  constructor(private router: Router) { }

  habilitarCupom(cupom: CupomModel) {
    if (cupom.desconto === 'DEIVIDE10' || 'deivide10' ) {

      this.cupomFunciona = true;

      this.cupomHabilitado.emit(true);
      alert('cupom habilitado com sucesso');

    } else {
      this.cupomFunciona = false;
      this.cupomHabilitado.emit(false);


      alert('cupom inválido ou expirado');
    }

  }

}

