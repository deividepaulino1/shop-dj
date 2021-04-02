import { Usuario1 } from 'src/assets/models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produto } from 'src/assets/models/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = 'http://localhost:3000/produto'; // api rest fake

  API = 'http://localhost:3000/produto/'; // api rest fake


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }


  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // Obtem todos os produtos
  getProduto(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  // Obtem produto pelo id
  getProdutoId(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // salva um produto
  saveProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // utualiza um produto
  updateProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.url + '/' + produto.id, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // deleta um produto
  deleteProduto(produto: Produto) {
    return this.httpClient.delete<Produto>(this.url + '/' + produto.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


  
}