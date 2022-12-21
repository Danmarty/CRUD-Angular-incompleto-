import { NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LivrosComponent } from './livros/livros.component';
import { CreateLivroComponent } from './livros/create-livro/create-livro.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './livros/update/update.component';
import { RouterLink } from '@angular/router';
import { DeleteLivroComponent } from './livros/delete-livro/delete-livro.component';
import { LivroComponent } from './livros/livro.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LivrosComponent,
    CreateLivroComponent,
    UpdateComponent,
    DeleteLivroComponent,
    LivroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgIf,
    CommonModule,
    FormsModule,
    RouterLink,
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }