import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedServiceService } from 'src/assets/services/carrinho/shared-service.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public sampleData = new BehaviorSubject<any[]>([]);
  public pastelData = [{
    name: 'Pastel de Calabresa',
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
    imgUrl: './produto-suco.jpg',
    price: 7.50,
    status: 'false',
  },
  {
    name: 'Coca-cola 350ml',
    imgUrl: './produto-refrigerante.jpg',
    price: 6.50,
  },
  {
    name: 'Brahma 350ml',
    imgUrl: './produto-cerveja.jpg',
    price: 7.00,
  },
  {
    name: 'Pinga 51 ',
    imgUrl: './produto-51.jpg',
    price: 7.50,
  },
  {
    name: 'Água 600ml',
    imgUrl: './produto-agua.png',
    price: 6.50,
  }];
  nextPastel: any;

  constructor(public sharedSerivce: SharedServiceService) { }


  ngOnInit() {
  }

  addItems(pastelData) {

    this.sharedSerivce.setItemData(pastelData);
    pastelData.status = 'Adicionado';
  }

}
