import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/assets/services/carrinho/shared-service.service';

@Component({
  selector: 'app-revisao',
  templateUrl: './revisao.component.html',
  styleUrls: ['./revisao.component.css']
})
export class RevisaoComponent implements OnInit {

  public sampleData: any = [];
  total: number | undefined;
  constructor(private sharedSerivce: SharedServiceService, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sharedSerivce.getItemData().subscribe(res => {
      this.sampleData = res;
    });
    this.sharedSerivce.getItemData().subscribe(price => {
      this.sampleData.price = this.total;
      this.total = this.getTotal(this.sampleData);
    });
  }
  // tslint:disable-next-line:typedef
  removeData(data) {
    this.sharedSerivce.deleteItemData(data);
  }

  // tslint:disable-next-line:typedef
  clearCart() {
    this.sharedSerivce.clearData();
  }

  calcularTotal(data) {
    data.status = 'Adicionado';
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
      this.router.navigate(['/dadosEntrega']);
    } else {
      alert('Carrinho vazio ou nenhum usuário conectado');
    }
  }

}
