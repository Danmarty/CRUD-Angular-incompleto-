import { LivroService } from '../livro.service';
import { Form, RequestCreate, ResponseCreate } from '../livro.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-livro.component.html',
  styleUrls: ['./create-livro.component.css']
})
export class CreateLivroComponent implements OnInit{
  
  categoria = new FormControl('');
  categoriaList: string[] = ['Ficção', 'Fantasia', 'Romance', 'Terror', 'Drama', 'Sci-fi'];

  form=this.fb.group({
    nome:['',Validators.required],
    categoria:['',Validators.required]
  })

  request: Form ={
    nome: '',
    categoria: ''
  }
  
  response: ResponseCreate;
  nome: string;
  id: any;

  constructor(private LivroService: LivroService, private fb:FormBuilder){}
  
  ngOnInit(){
    this.form = new FormGroup({
      nome: new FormControl(),
      categoria: new FormControl()
   });
  
  }

  save(){
    this.LivroService.createLivro(this.request).subscribe(res =>{
    this.request = res;
    this.request.nome= res.nome;
    this.request.categoria= res.categoria;
    this.id= res.id;
    console.log(this.request);
    console.log(res);
    console.log(this.form);
  });
  }
  
}


