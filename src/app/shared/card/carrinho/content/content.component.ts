import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/assets/services/carrinho/shared-service.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public pastelData = [{
    name: 'Pastel de Calabresa',
    descricao: 'Pastel recheado com carne, queijo e tudo que há de bom',
    imgUrl: './pastel-calabresa.png',
    price: 7.50,
    status: 'false',
  },
  {
    name: 'Pastel de queijo',
    imgUrl: './pastel-queijo.png',
    price: 6.50,
  },
  {
    name: 'Pastel de carne',
    imgUrl: './pastel-carne.png',
    price: 7.00,
  },
  {
    name: 'Pastel de frango ',
    imgUrl: './pastel-frango.png',
    price: 7.50,
  },
  {
    name: 'Pastel de Pizza',
    imgUrl: './pastel-pizza.png',
    price: 6.50,
  }];

  public refriData = [{
    name: 'Suco de laranja',
    imgUrl: './pastel-calabresa.png',
    price: 7.50,
    status: 'false',
  },
  {
    name: 'Pastel de queijo',
    imgUrl: './pastel-queijo.png',
    price: 6.50,
  },
  {
    name: 'Pastel de carne',
    imgUrl: './pastel-carne.png',
    price: 7.00,
  },
  {
    name: 'Pastel de frango ',
    imgUrl: './pastel-frango.png',
    price: 7.50,
  },
  {
    name: 'Pastel de Pizza',
    imgUrl: './pastel-pizza.png',
    price: 6.50,
  }];
  constructor(public sharedSerivce: SharedServiceService) { }


  ngOnInit() {
  }
 
  addItems(data) {
    
    this.sharedSerivce.setItemData(data);
    data.status = 'Adicionado'; 
  }
}
