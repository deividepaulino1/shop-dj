import { Usuario1 } from 'src/assets/models/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  

  mostrarMenuEmitter = new EventEmitter<boolean>();
  ocultarLoginEmitter = new EventEmitter<boolean>();
  
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario1) {
    if (usuario.login === 'deivide' && usuario.senha == '123') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(false);
      this.ocultarLoginEmitter.emit(true);
      
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(true);
      this.ocultarLoginEmitter.emit(false);
    }

  }

}

