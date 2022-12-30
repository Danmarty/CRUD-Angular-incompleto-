import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Livro (id INTEGER PRIMARY KEY, nome TEXT, categoria TEXT)')
    })

}
export async function insertLivro(livro){
    return openDb().then(db=>{
        return db.get('INSERT INTO Livro (nome, categoria) VALUES (?,?)', [livro.nome, livro.categoria])
        .then(res=>res);
    })
}

export async function updateLivro(livro){
    openDb().then(db=>{
        db.run('UPDATE Livro SET nome=?, categoria=? WHERE id=?', [livro.nome, livro.categoria, livro.id]);
    })
}
export async function selectLivros(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Livro')
        .then(res=>res)
    })
}
export async function selectLivro(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Livro WHERE id=?', [id])
        .then(res=>res)
    })
}
export async function deleteLivro(id){
    return openDb().then(db=>{
        return db.get('DELETE  FROM Livro WHERE id=?', [id])
        .then(res=>res)
    })
}