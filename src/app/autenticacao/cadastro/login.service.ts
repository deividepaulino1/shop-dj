import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario1 } from 'src/models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000/usuario'; // api rest fake


  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }


  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // Obtem todos os produtos
  getUsuario(): Observable<Usuario1[]> {
    return this.httpClient.get<Usuario1[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  // Obtem produto pelo id
  getUsuarioId(id: number): Observable<Usuario1> {
    return this.httpClient.get<Usuario1>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // salva um produto
  saveUsuario(usuario: Usuario1): Observable<Usuario1> {
    return this.httpClient.post<Usuario1>(this.url, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  // utualiza um produto
  updateUsuario(usuario: Usuario1): Observable<Usuario1> {
    return this.httpClient.put<Usuario1>(this.url + '/' + usuario.id, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // deleta um produto
  deleteUsuario(usuario: Usuario1) {
    return this.httpClient.delete<Usuario1>(this.url + '/' + usuario.id, this.httpOptions)
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