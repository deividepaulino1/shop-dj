import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/assets/services/carrinho/shared-service.service';
import { CupomModel } from './cupom';
import { CupomService } from './cupom.service';

@Component({
  selector: 'app-meu-pedido',
  templateUrl: './meu-pedido.component.html',
  styleUrls: ['./meu-pedido.component.css']
})
export class MeuPedidoComponent implements OnInit {

  public sampleData: any = [];
  total: number | undefined;
  public cupom: CupomModel = new CupomModel();
  cupom1 = 'DEIVIDE';
  novoPreco = 0;
  custoFrete = 3;

  constructor(private sharedSerivce: SharedServiceService, private router: Router, private cupomService: CupomService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sharedSerivce.getItemData().subscribe(res => {
      this.sampleData = res;
    });
    this.sharedSerivce.getItemData().subscribe(price => {
      this.sampleData.price = this.total;
      this.total = this.getTotal(this.sampleData);
    });

    this.novoPreco = this.getTotal(this.sampleData) + this.custoFrete;
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

  fazerCheckout() {
    if (this.sampleData.length >= 1) {
      this.router.navigate(['/statusPedido']);
      alert('PEDIDO NUMERO #0001 GERADO COM SUCESSO');
      this.clearCart();
    } else {
      alert('Carrinho vazio ou nenhum usuário conectado');
    }
  }

  validarCupom(){
    console.log(this.cupom);
    this.cupomService.habilitarCupom(this.cupom);
  }

  newPrice(){
    if ( this.cupom.desconto = this.cupom.desconto) {
       this.novoPreco = (this.getTotal(this.total) * 0.9) + this.custoFrete ;
       alert('Cupom aplicado com sucesso, você ganhou 10% de desconto!!!');
    }
    else {
      this.novoPreco = this.getTotal(this.total ) + this.custoFrete;
      alert('ATENÇÃO \n Cupom inválido, tente utilizar: \n "DEIVIDE10"');
    }
    console.log('novo preço');
    console.log(this.novoPreco);
  }

  clearCart() {
    this.sharedSerivce.clearData();
  }



}