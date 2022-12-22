import { Data } from '@angular/router';
import { ResponseUpdate, Livro } from './../livro.model';
import { LivroService } from './../../livros/livro.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../livro.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  request: RequestUpdate;
  constructor(private livroService: LivroService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.livroService.getLivro(this.id).subscribe(res =>{
      this.request={
        nome: `${res.nome}`,
        categoria: `${res.categoria}`,
        
        };
        console.log(this.request)
        console.log(this.id)
        console.log(res)
    });
  }
  update(){
    this.livroService.updateLivro(this.id, this.request).subscribe(res =>{
      alert(`Atualizar: ${res.updatedAt}, Nome: ${res.nome}`);
    })
  }

}
