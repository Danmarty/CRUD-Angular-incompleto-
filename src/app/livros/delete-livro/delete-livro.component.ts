import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute } from '@angular/router';
import { Livro, LivroDelete, LivroUpdate } from '../livro.model';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-delete-livro',
  templateUrl: './delete-livro.component.html',
  styleUrls: ['./delete-livro.component.css']
})
export class DeleteLivroComponent implements OnInit{

  form: FormGroup;
  id: any;
  request: LivroDelete;
  categoriaList: string[] = ['Ficção', 'Fantasia', 'Romance', 'Terror', 'Drama', 'Sci-fi'];


  constructor(private livroService: LivroService, private route: ActivatedRoute, private fb:FormBuilder){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get(this.id);
    this.livroService.getLivro(this.id).subscribe(res =>{
      console.log(res)
        
      });
      this.form=this.fb.group({
        id:['',Validators.required],
        nome:['',Validators.required],
        categoria:['',Validators.required]
      })
    }
    delete(){
      let livro:LivroDelete={id:this.form.controls['id'].value,nome:this.form.controls['nome'].value, categoria:this.form.controls['categoria'].value}
      this.livroService.deleteLivro(this.id,livro).subscribe(res =>{
      console.log(res);
      console.log(this.id);
      console.log(livro);
    
    });
    }

    /*delete1(){
      this.livroService.deleteLivro(this.id,this.livro).subscribe(res=>{
        alert('Removido com sucesso!');
      })
    }*/
    
}
