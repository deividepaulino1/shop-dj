import { Usuario1 } from './../../../models/usuario';
import { UsuarioService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  usuario = {} as Usuario1;
  usuarios: Usuario1[] =[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.getUsuario();
  }
  // defini se um produto será criado ou atualizado
  saveUsuario(form: NgForm) {
    if (this.usuario.id !== undefined) {
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.usuarioService.saveUsuario(this.usuario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  // Chama o serviço para listar os produtos
  getUsuario() {
    this.usuarioService.getUsuario().subscribe((produtos: Usuario1 []) => {
      this.usuarios = produtos;
    });
  }
  // deleta um produto
  deleteUsuario(usuario: Usuario1) {
    this.usuarioService.deleteUsuario(usuario).subscribe(() => {
      this.getUsuario();
    });
  }
  // copia o produto para ser editado.
  editUsuario(usuario: Usuario1) {
    this.usuario = { ...usuario };
  }
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsuario();
    form.resetForm();
    this.usuario = {} as Usuario1;
  }
}//