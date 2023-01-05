import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

    form=this.fb.group({
      id:[{value:''}],
      nome:['',Validators.required]
    })
  
    constructor(public livroService: LivroService, private fb:FormBuilder){}
  
    ngOnInit() {
      this.livroService.getLivros().subscribe(res =>{
         this.responseLivros = res;
         
      })
    }

}
