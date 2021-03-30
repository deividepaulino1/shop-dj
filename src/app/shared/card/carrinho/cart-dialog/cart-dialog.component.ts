import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  public sampleData: any = [] ;
  constructor(private sharedSerivce: SharedServiceService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.sharedSerivce.getItemData().subscribe(res => {
      this.sampleData = res;
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
}
