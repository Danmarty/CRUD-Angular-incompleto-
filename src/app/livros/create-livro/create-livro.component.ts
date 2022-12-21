import { LivroService } from '../livro.service';
import { RequestCreate, ResponseCreate } from '../livro.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-livro.component.html',
  styleUrls: ['./create-livro.component.css']
})
export class CreateLivroComponent implements OnInit{

  request: RequestCreate ={
    nome: '',
    categoria: ''
  }
  response!: ResponseCreate;
  
  constructor(private LivroService: LivroService){}

  ngOnInit(){}

  save(){
    this.LivroService.createLivro(this.request).subscribe(res =>{
    this.response = res;
    console.log(res);
  });
  }
  
}

