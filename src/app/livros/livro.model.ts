import { Data } from "@angular/router";

export interface Livro {
    id: number;
    nome: string;
    categoria: string;
}

export interface ResponseLivros {
    data: Livro[];
    livro: Data[]
    id: number;
    nome: string;
    categoria: string;
}

export interface RequestCreate {
    nome: string;
    categoria: string;
}

export interface ResponseCreate {
    nome: string;
    categoria: string;
    id: string;
    createdAt: Date;
}

export interface ResponseLivro {
    data:Livro
}

export interface RequestUpdate {
    nome: string;
    categoria: string;
}

export interface ResponseUpdate {
    nome: string;
    categoria: string;
    updatedAt: Date;
}