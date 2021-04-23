import { MinhaContaComponent } from './shared/card/minha-conta/minha-conta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { CardComponent } from './shared/card/card.component';
import { CarrinhoComponent } from './shared/card/carrinho/carrinho.component';
import { ContatoComponent } from './shared/card/contato/contato.component';
import { ProdutosComponent } from './shared/card/produtos/produtos.component';
import { FooterComponent } from './shared/card/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { StatusPedidoComponent } from './checkout/status-pedido/status-pedido.component';
import { dadosEntregaComponent } from './checkout/dados-entrega/dados-entrega.component';
import { RevisaoComponent } from './checkout/revisao/revisao.component';
import { MeuPedidoComponent } from './checkout/meu-pedido/meu-pedido.component';
import { MeusPedidosComponent } from './shared/card/minha-conta/meus-pedidos/meus-pedidos.component';
import { MeusDadosComponent } from './shared/card/minha-conta/meus-dados/meus-dados.component';
import { AuthGuard } from 'src/assets/guard/auth.guard';

const routes: Routes = [

  { path: 'nav', component: NavComponent },
  { path: 'inicio', component: CardComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'carrinho', component: CarrinhoComponent, canActivate: [AuthGuard] },
  { path: 'contato', component: ContatoComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'rodape', component: FooterComponent },
  { path: 'statusPedido', component: StatusPedidoComponent,  canActivate: [AuthGuard]},
  { path: 'dadosEntrega', component: dadosEntregaComponent,  canActivate: [AuthGuard] },
  { path: 'revisao', component: RevisaoComponent },
  { path: 'meuPedido', component: MeuPedidoComponent, canActivate: [AuthGuard] },
  { path: '', component: CardComponent },
  {
    path: 'minha-conta', component: MinhaContaComponent, canActivate: [AuthGuard],
    children: [
      { path: 'meus-dados', component: MeusDadosComponent},
      { path: 'meus-pedidos', component: MeusPedidosComponent }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
