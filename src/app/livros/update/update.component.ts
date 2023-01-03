
import { LivroService } from './../../livros/livro.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroCriar, LivroUpdate, RequestUpdate } from '../livro.model';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  form:FormGroup;
  categoriaList: string[] = ['Ficção', 'Fantasia', 'Romance', 'Terror', 'Drama', 'Sci-fi'];

  id: any;
  request: LivroUpdate;
  constructor(private livroService: LivroService, private route: ActivatedRoute, private fb:FormBuilder){}

  ngOnInit() {
    this.form=this.fb.group({
    id:['',Validators.required],
    nome:['',Validators.required],
    categoria:['',Validators.required]
  })
    /*this.id = this.route.snapshot.paramMap.get('id');
    this.livroService.getLivro(this.id).subscribe(res =>{
      this.request={
        id:(this.id),
        nome: `${this.id.nome}`,
        categoria: `${res.categoria}`,
        
        };
        console.log(this.request)
        console.log(this.id)
        console.log(this.route.snapshot.paramMap)
    });
  }
  
  update1(){
    this.livroService.updateLivro(this.id, this.request).subscribe(res =>{
      alert(`Atualizar: ${res.updatedAt}, Nome: ${res.nome}`);
    })*/
  }
  update(){
    let livro:LivroUpdate={id:this.form.controls['id'].value,nome:this.form.controls['nome'].value, categoria:this.form.controls['categoria'].value}
    this.livroService.updateLivro(this.id,livro).subscribe(res =>{
    console.log(res);
    console.log(this.id);
    console.log(livro)
  
  });
  }
}
