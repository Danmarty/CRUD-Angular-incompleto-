import { Injectable } from '@angular/core';
import { ResponseLivros, RequestCreate, ResponseCreate, RequestUpdate, ResponseUpdate, Livro } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLivro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private url="http://localhost:3000/livro";

  constructor(private http: HttpClient) { }

/*getLivros(): Observable<ResponseLivros>{
    return this.http.get<ResponseLivros>(this.url+"s");
    

}*/
getLivros(): Observable<Livro[]>{
  return this.http.get<Livro[]>(this.url+"s");

}

 createLivro(request: RequestCreate): Observable<ResponseCreate>{
  return this.http.post<ResponseCreate>(this.url, request);

 }
 createLivro1(request: RequestCreate): Observable<ResponseCreate>{
  return this.http.post<ResponseCreate>(this.url, request);

 }
 /*tirar o id */
 getLivro(id: string): Observable<ResponseLivro>{
  const _url=`${this.url+"s"}`;

    return this.http.get<ResponseLivro>(_url);
 }
 getLivrot(id:string): Observable<Livro[]>{
  return this.http.get<Livro[]>(this.url+"s");

}

 updateLivro(id:string, request: RequestUpdate): Observable<ResponseUpdate>{
  const _url=`${this.url}`;

  return this.http.put<ResponseUpdate>(this.url, request);
  console.log(this.url)
 }

 deleteLivro(id:string): Observable<any>{
  const _url=`${this.url}/${id}`;

  return this.http.delete<any>(_url);
 }
}

