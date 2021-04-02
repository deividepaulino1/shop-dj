import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/autenticacao/cadastro/login.service';
import { Usuario1 } from 'src/models/usuario';

@Component({
  selector: 'app-usuario-autenticado',
  templateUrl: './usuario-autenticado.component.html',
  styleUrls: ['./usuario-autenticado.component.css']
})
export class UsuarioAutenticadoComponent implements OnInit {

  usuario = {} as Usuario1;
  usuarios: Usuario1[] = [];

  constructor(private usuarioService: UsuarioService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getUsuario();
  }
  // defini se um produto será criado ou atualizado
  // tslint:disable-next-line:typedef
  saveUsuario(form: NgForm) {
  {
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
        this.cleanForm(form);
        alert('Dados editados com sucesso!!!');
      });
    }
  }
  // Chama o serviço para listar os produtos
  // tslint:disable-next-line:typedef
  getUsuario() {
    this.usuarioService.getUsuario().subscribe((produtos: Usuario1 []) => {
      this.usuarios = produtos;
    });
  }
  // deleta um produto
  // tslint:disable-next-line:typedef
  deleteUsuario(usuario: Usuario1) {
    this.usuarioService.deleteUsuario(usuario).subscribe(() => {
      this.getUsuario();
    });
  }
  // copia o produto para ser editado.
  // tslint:disable-next-line:typedef
  editUsuario(usuario: Usuario1) {
    this.usuario = { ...usuario };
  }


  // limpa o formulario
  // tslint:disable-next-line:typedef
  cleanForm(form: NgForm) {
    this.getUsuario();
    form.resetForm();
    this.usuario = {} as Usuario1;
  }
}
