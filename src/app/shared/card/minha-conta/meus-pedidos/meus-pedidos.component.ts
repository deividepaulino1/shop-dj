import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-pedidos',
  templateUrl: './meus-pedidos.component.html',
  styleUrls: ['./meus-pedidos.component.css']
})
export class MeusPedidosComponent implements OnInit {
  public meusPedidos = [{
    id: '#0001',
    descricao: '1x Pastel de calabresa, 1x Coca-cola lata 350ml',
    price: 17,
  },
  {
    id: '#0002',
    descricao: '1x ComBão ( Pastel, Coca-lata e molho especial',
    price: 17.99,
  },
  {
    id: '#0003',
    descricao: '1x Pastel de Beterraba, 1x Coxão, 1x Suco de Laranja ',
    price: 24.00,
  },
  {
    id: '#0004',
    descricao: '1x Brahma 350ml, 1x Pinga 51, 1x Água 600ml, 1x Pastel de Pizza',
    price: 30.5,
  },
  {
    id: '#0005',
    descricao: '1x Pastel de carne, 1x Pastel de queijo, 1x Suco de Laranja',
    price: 24,
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
