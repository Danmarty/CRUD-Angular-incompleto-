
import { LivroService } from './../../livros/livro.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../livro.model';
import { FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  form=this.fb.group({
    id:[{value:''}],
    nome:['',Validators.required]
  })
  categorias = new FormControl('');
  categoriaList: string[] = ['Ficção', 'Fantasia', 'Romance', 'Terror', 'Drama', 'Sci-fi'];

  id: string;
  request: RequestUpdate;
  constructor(private livroService: LivroService, private route: ActivatedRoute, private fb:FormBuilder){}

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
