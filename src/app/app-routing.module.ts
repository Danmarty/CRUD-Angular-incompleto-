
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './livros/livros.component';
import { CreateLivroComponent } from './livros/create-livro/create-livro.component';
import { UpdateComponent } from './livros/update/update.component';
import { DeleteLivroComponent } from './livros/delete-livro/delete-livro.component';


const routes: Routes = [
  {path: 'livros', component: LivrosComponent},
  {path: 'livros/create', component: CreateLivroComponent},
  {path: 'livros/update/:id', component: UpdateComponent},
  {path: 'livros/delete/:id', component: DeleteLivroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }