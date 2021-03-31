import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/assets/services/carrinho/shared-service.service';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  sampleData: any = [] ;
  cartBoolean = false;
  constructor(private sharedSerivce: SharedServiceService) {

  }

  ngOnInit() {
    this.sharedSerivce.getItemData().subscribe(res => {
      this.sampleData = res;
    });
  }
  cartClicked() {
    this.cartBoolean = !this.cartBoolean;
  }
}
