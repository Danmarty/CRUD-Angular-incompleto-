import { Component, OnInit } from '@angular/core';
import { Livro, ResponseLivros } from './livro.model';
import { LivroService } from './livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

    responseLivros: Livro[]; 
    totalLivros: number;
  
    constructor(public livroService: LivroService){}
  
    ngOnInit() {
      this.livroService.getLivros().subscribe(res =>{
         this.responseLivros = res;
         console.log(this.responseLivros);
      })
    }

}
