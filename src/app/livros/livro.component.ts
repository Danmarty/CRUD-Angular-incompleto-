import { Component, OnInit } from '@angular/core';
import { ResponseLivro } from './livro.model';
import { LivroService } from './livro.service';
import { ActivatedRoute } from '@angular/router';
import { Livro } from './livro.model';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit  {
  responseLivro: ResponseLivro
  id:string;
  livro:Livro;

  constructor(private livroService: LivroService, private route: ActivatedRoute){}
  
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      this.livroService.getLivro(this.id).subscribe(res =>{
        this.livro = res.data;
      this.responseLivro = res;
      console.log(this.livro);
      console.log(res);
      console.log(res.data);
      
    })
}
}

