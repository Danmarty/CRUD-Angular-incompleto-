import { NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { CreateLivroComponent } from './livros/create-livro/create-livro.component';
import { FormsModule, FormControl} from '@angular/forms';
import { UpdateComponent } from './livros/update/update.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { DeleteLivroComponent } from './livros/delete-livro/delete-livro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
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
    ReactiveFormsModule,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule,
    NgClass,
    FormsModule,
    MatSelectModule
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


