import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/assets/services/carrinho/shared-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public pastelData = [{
    name: 'ComBão',
    imgUrl: './destaques/combo-pastel.png',
    price: 14.99,
    status: 'false',
  },
  {
    name: 'Coxão',
    imgUrl: './destaques/coxinha.png',
    price: 4.50,
  },
  {
    name: 'Pastel de Beterraba',
    imgUrl: './destaques/pastel-beterraba.png',
    price: 9.00,
  },
  {
    name: 'Pastel de Palmito ',
    imgUrl: './destaques/pastel-palmito.png',
    price: 7.50,
  },
  {
    name: 'Enrroladinho',
    imgUrl: './destaques/enrroladinho.png',
    price: 5.00,
  }];

  constructor(public sharedSerivce: SharedServiceService) { }

  ngOnInit(): void {

  }

  addItems(data) {
    
    this.sharedSerivce.setItemData(data);
    data.status = 'Adicionado'; 
  }

}
