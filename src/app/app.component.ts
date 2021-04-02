import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdutoService} from 'src/assets/services/produto/produto.service';
import { Produto } from 'src/assets/models/produto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ld-shop';

  produto = {} as Produto;
  produtos: Produto[] =[];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.getProdutos();
  }
  // defini se um produto será criado ou atualizado
  saveProduto(form: NgForm) {
    if (this.produto.id !== undefined) {
      this.produtoService.updateProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.produtoService.saveProduto(this.produto).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  // Chama o serviço para listar os produtos
  getProdutos() {
    this.produtoService.getProduto().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });
  }
  // deleta um produto
  deleteProduto(produto: Produto) {
    this.produtoService.deleteProduto(produto).subscribe(() => {
      this.getProdutos();
    });
  }
  // copia o produto para ser editado.
  editProduto(produto: Produto) {
    this.produto = { ...produto };
  }
  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getProdutos();
    form.resetForm();
    this.produto = {} as Produto;
  }
  
}//