import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  protected sampleData = [{
    name: 'Produto 01',
    imgUrl: 'card1.png',
    price: 9.99,
  },
  {
    name: 'Produto 02',
    imgUrl: 'card2.png',
    price: 3.99,
  },
  {
    name: 'Produto 03',
    imgUrl: 'card3.png',
    price: 8.99,
  },
  {
    name: 'Produto 04 ',
    imgUrl: 'card4.png',
    price: 5.99,
  },
  {
    name: 'Produto 05',
    imgUrl: 'card5.png',
    price: 4.99,
  }];
  constructor(private sharedSerivce: SharedServiceService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  addItems(data) {
    data.status = 'No carrinho'; // appending a new key status
    this.sharedSerivce.setItemData(data);
  }
}
