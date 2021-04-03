import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  url = 'http://localhost:3000/usuario'; // api rest fake
    id!: number;


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }


  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // Obtem todos os produtos
  getUsuario(): Observable<UserAuth[]> {
    return this.httpClient.get<UserAuth[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  // Obtem produto pelo id
  getUsuarioId(id: number): Observable<UserAuth> {
    return this.httpClient.get<UserAuth>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // salva um produto
  saveUser(usuario: UserAuth): Observable<UserAuth> {
    return this.httpClient.post<UserAuth>(this.url, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // utualiza um produto
  updateUsuario(usuario: UserAuth): Observable<UserAuth> {
    return this.httpClient.put<UserAuth>(this.url + '/' + usuario.id, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // deleta um produto
  deleteUsuario(usuario: UserAuth) {
    return this.httpClient.delete<UserAuth>(this.url + '/' + usuario.id, this.httpOptions)
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