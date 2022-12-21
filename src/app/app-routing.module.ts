
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LivrosComponent } from './livros/livros.component';
import { CreateLivroComponent } from './livros/create-livro/create-livro.component';
import { UpdateComponent } from './livros/update/update.component';
import { DeleteLivroComponent } from './livros/delete-livro/delete-livro.component';
import { LivroComponent } from './livros/livro.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'livros', component: LivrosComponent},
  {path: 'livros/create', component: CreateLivroComponent},
  {path: 'livros/update/:id', component: UpdateComponent},
  {path: 'livros/delete/:id', component: DeleteLivroComponent},
  {path: 'livro', component: LivroComponent},
  {path: 'livro/:id', component: LivroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }