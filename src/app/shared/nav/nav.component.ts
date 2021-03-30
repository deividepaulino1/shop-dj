import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autenticacao/login/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostrarLogin: boolean = true;
  mostrarPerfil: boolean = false;


  constructor(private authService: AuthService) {

  }

  ngOnInit(): void { 

  this.authService.mostrarMenuEmitter.subscribe(
    ocultarLogin => this.mostrarLogin = ocultarLogin
  )

  this.authService.ocultarLoginEmitter.subscribe(
    ocultarLogin => this.mostrarPerfil = ocultarLogin
  )
  
  }

}
