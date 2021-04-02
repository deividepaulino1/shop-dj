import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';
import { CardComponent } from './shared/card/card.component';
import { ProdutosComponent } from './shared/card/produtos/produtos.component';
import { ContatoComponent } from './shared/card/contato/contato.component';
import { CarrinhoComponent } from './shared/card/carrinho/carrinho.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { FooterComponent } from './shared/card/footer/footer.component';
import { RevisaoComponent } from './checkout/revisao/revisao.component';
import { FormaDePagamentoComponent } from './checkout/forma-de-pagamento/forma-de-pagamento.component';
import { StatusPedidoComponent } from './checkout/status-pedido/status-pedido.component';
import { AuthService } from './autenticacao/login/auth.service';
import { FormsModule } from '@angular/forms';
import { ContentComponent } from './shared/card/carrinho/content/content.component';
import { CartHeaderComponent } from './shared/card/carrinho/cart-header/cart-header.component';
import { CartDialogComponent } from './shared/card/carrinho/cart-dialog/cart-dialog.component';
import { UsuarioAutenticadoComponent } from './autenticacao/login/usuario-autenticado/usuario-autenticado/usuario-autenticado.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    ProdutosComponent,
    ContatoComponent,
    CarrinhoComponent,
    LoginComponent,
    CadastroComponent,
    FooterComponent,
    RevisaoComponent,
    FormaDePagamentoComponent,
    StatusPedidoComponent,
    ContentComponent,
    CartHeaderComponent,
    CartDialogComponent,
    CadastroComponent,
    UsuarioAutenticadoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
