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
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DeleteLivroComponent } from './livros/delete-livro/delete-livro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LivrosComponent,
    CreateLivroComponent,
    UpdateComponent,
    DeleteLivroComponent,

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
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule,
    NgClass
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


