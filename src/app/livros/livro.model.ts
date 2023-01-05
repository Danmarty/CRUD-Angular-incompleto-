export interface Livro {
    id: number;
    nome: string;
    categoria: string;
}

export interface ResponseLivros {
    Data: Livro[]
    
}

export interface LivroCriar {
    nome: string;
    categoria: string;
}
export interface Form {
    nome: string;
    categoria: string;
}

export interface ResponseCreate {
    nome: string;
    categoria: string;
    
}

export interface LivroUpdate {
    id:number;
    nome: string;
    categoria: string;
}

export interface RequestUpdate {
    nome: string;
    categoria: string;
}

export interface ResponseUpdate {
    id:number;
    nome: string;
    categoria: string;
    
}
export interface LivroDelete {
    id:number;
    nome:string;
    categoria:string;
    
}
export interface LivroDeletar {
    id:number;
    
    
}