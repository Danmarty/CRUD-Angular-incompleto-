export interface Livro {
    id: number;
    nome: string;
    categoria: string;
}

export interface ResponseLivros {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Livro[];
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