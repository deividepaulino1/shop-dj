import { Usuario1 } from 'src/assets/models/usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario1 = new Usuario1();

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    console.log(this.usuario);
    console.log(this.usuario.login);
    this.authService.fazerLogin(this.usuario);
  }

}
