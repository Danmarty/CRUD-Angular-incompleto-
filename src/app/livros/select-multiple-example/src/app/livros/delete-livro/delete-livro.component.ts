import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro.model';



@Component({
  selector: 'app-delete-livro',
  templateUrl: './delete-livro.component.html',
  styleUrls: ['./delete-livro.component.css']
})
export class DeleteLivroComponent implements OnInit{

  id:string;
  livro:Livro;
  
  constructor(private livroService: LivroService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get(this.id);
    this.livroService.getLivro(this.id).subscribe(res =>{
      this.livro = res;
        
      });
    }

    delete(){
      this.livroService.deleteLivro(this.id).subscribe(res=>{
        alert('Removido com sucesso!');
      })
    }
    
}
