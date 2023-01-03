import { LivroCriar } from './../livro.model';
import { LivroService } from '../livro.service';
import { Form, ResponseCreate } from '../livro.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-livro.component.html',
  styleUrls: ['./create-livro.component.css']
})
export class CreateLivroComponent implements OnInit{
  
 
  categoriaList: string[] = ['Ficção', 'Fantasia', 'Romance', 'Terror', 'Drama', 'Sci-fi'];

  form: FormGroup;

  request: Form ={
    nome: '',
    categoria: ''
  }
  
  response: ResponseCreate;
  nome: string;
  id: any;

  constructor(private LivroService: LivroService, private fb:FormBuilder){}
  
  ngOnInit(){
    
   this.form=this.fb.group({
    nome:['',Validators.required],
    categoria:['',Validators.required]
  })
  
  }

  save(){
    let livro:LivroCriar={nome:this.form.controls['nome'].value, categoria:this.form.controls['categoria'].value}
    this.LivroService.createLivro(livro).subscribe(res =>{
    console.log(res);
    console.log(livro)
  
  });
  }
  
}


