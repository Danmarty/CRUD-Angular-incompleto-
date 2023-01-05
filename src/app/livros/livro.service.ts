import { Injectable } from '@angular/core';
import { ResponseLivros, ResponseCreate, RequestUpdate, ResponseUpdate, Livro, LivroCriar, LivroDelete, LivroDeletar } from './livro.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LivroUpdate } from './livro.model';


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

 createLivro(Livro: LivroCriar): Observable<ResponseCreate>{
  return this.http.post<ResponseCreate>(this.url, Livro);

 }
 /*tirar o id */
 getLivro(id: string): Observable<LivroUpdate>{
  const _url=`${this.url+"s"}`;

    return this.http.get<LivroUpdate>(_url);
 }

 updateLivro(id:string, Livro: LivroCriar): Observable<ResponseUpdate>{
  const _url=`${this.url}`;

  return this.http.put<ResponseUpdate>(this.url, Livro);
 
 }

 deleteLivro(id:string): Observable<LivroDeletar>{
  const _url=`${this.url}`;

  return this.http.delete<LivroDeletar>(_url);
 }
}

