import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario1 } from 'src/assets/models/usuario';
import { SharedServiceService } from 'src/assets/services/carrinho/shared-service.service';
import { UsuarioService } from 'src/assets/services/login/login.service';

@Component({
  selector: 'app-forma-de-pagamento',
  templateUrl: './dados-entrega.component.html',
  styleUrls: ['./dados-entrega.component.css']
})
export class dadosEntregaComponent implements OnInit {

  public sampleData: any = [];
  total: number | undefined;

  usuario = {} as Usuario1;
  usuarios: Usuario1[] = [];


  constructor(private sharedSerivce: SharedServiceService, private router: Router, private usuarioService: UsuarioService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getUsuario();
    this.sharedSerivce.getItemData().subscribe(res => {
      this.sampleData = res;
    });
    this.sharedSerivce.getItemData().subscribe(price => {
      this.sampleData.price = this.total;
      this.total = this.getTotal(this.sampleData);
    });
  }

  getTotal(data) {
    let total = 0;
    this.sampleData.forEach((sampleData) => {
      total += sampleData.price;
    });
    console.log(total);
    console.log(this.sampleData);
    return total;
  }

  getUsuario() {
    this.usuarioService.getUsuario().subscribe((produtos: Usuario1[]) => {
      this.usuarios = produtos;
    });
  }

  cleanForm(form: NgForm) {
    this.getUsuario();
    form.resetForm();
    this.usuario = {} as Usuario1;
  }

  saveUsuario(form: NgForm) {
    this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
    });
    alert('dados alterados com sucesso!');
    this.router.navigate(['/meuPedido']);
  }

  editUsuario(usuario: Usuario1) {
    this.usuario = { ...usuario };
  }

  fazerCheckout() {
    if (this.sampleData.length >= 1) {
      this.router.navigate(['/meuPedido']);
    } else {
      alert('Carrinho vazio ou nenhum usuário conectado');
    }
  }


}
